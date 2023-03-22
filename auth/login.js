import supabase from './supabaseClient';

async function handleSubmit(event) {
  event.preventDefault();
  const { data, error } = await supabase.auth.signIn({
    email: event.target.email.value,
    password: event.target.password.value,
  });

  if (error) {
    console.error('Error signing in:', error.message);
  } else {
    console.log('Signed in successfully:', data);
    // Redirect the user to a protected page or show a success message.
  }
}

document.querySelector('form').addEventListener('submit', handleSubmit);
