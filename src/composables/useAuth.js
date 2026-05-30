// src/composables/useAuth.js
import { ref, computed } from 'vue'
import { supabase } from '@/services/supabase'

const _user = ref(null)
const _token = ref(localStorage.getItem('auth_token') || null)

export function useAuth() {

  const isAuthenticated = computed(() => !!_token.value)
  const user = computed(() => _user.value)

  function login(userData, token) {
    _user.value = userData
    _token.value = token
    localStorage.setItem('auth_token', token)
  }

  function logout() {
    _user.value = null
    _token.value = null
    localStorage.removeItem('auth_token')
  }

 async function authenticate(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) {
    console.log('LOGIN ERROR:', error.message)
    return null
  }

  return data.user
}

  async function register(name, email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password
  })

  if (error) {
    return { ok: false, error: error.message }
  }

  const user = data.user

  if (user) {
    const { error: profileError } = await supabase
      .from('profiles')
      .upsert({
        id: user.id,
        email: user.email,
        name,
        role: 'user'
      })

    if (profileError) {
      console.log('PROFILE ERROR:', profileError.message)
    }
  }

  return { ok: true }
}

  function emailExists() {
    return false
  }

  return {
    user,
    isAuthenticated,
    login,
    logout,
    authenticate,
    register,
    emailExists
  }
}