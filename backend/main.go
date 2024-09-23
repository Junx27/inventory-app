package main

import (
	"encoding/json"
	"net/http"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

// User struct to hold user information
type User struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

// UserRole struct to hold user roles
type UserRole struct {
	Email string `json:"email"`
	Role  string `json:"role"`
}

// In-memory user storage (for demonstration purposes)
var users = map[string]string{
	"admin@gmail.com": "123456", // password: "123456"
	"user@gmail.com":  "123456", // password: "123456"
}

// In-memory role storage
var roles = map[string]string{
	"admin@gmail.com": "admin",
	"user@gmail.com":  "user",
}

// Login function to handle login requests
func Login(w http.ResponseWriter, r *http.Request) {
	var user User
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	storedPassword, ok := users[user.Email]
	if !ok || storedPassword != user.Password {
		http.Error(w, "Invalid credentials", http.StatusUnauthorized)
		return
	}

	// Retrieve user role
	role, roleExists := roles[user.Email]
	if !roleExists {
		http.Error(w, "Role not found", http.StatusInternalServerError)
		return
	}

	// Respond with success and role
	response := struct {
		Message string `json:"message"`
		Role    string `json:"role"`
	}{
		Message: "Login successful",
		Role:    role,
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}

// Logout function to handle logout requests
func Logout(w http.ResponseWriter, r *http.Request) {
	// Here you would typically handle session cleanup if you had sessions.
	// For example, if using JWT, you might invalidate the token on the server.

	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Logout successful"))
}

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/login", Login).Methods("POST")
	router.HandleFunc("/logout", Logout).Methods("POST")

	// Set up CORS
	corsHeaders := handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"})
	corsOrigins := handlers.AllowedOrigins([]string{"*"})
	corsMethods := handlers.AllowedMethods([]string{"POST"})

	// Start the server with CORS enabled
	http.ListenAndServe(":8080", handlers.CORS(corsHeaders, corsOrigins, corsMethods)(router))
}
