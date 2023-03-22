import supabase from './supabaseClient';

async function handleSubmit(event) {
  event.preventDefault();
  const { data, error } = await supabase
  .from('users')
  .insert({ 
    name: 'John Doe',
    email: 'example@example.com', 
    password: 'mypassword', 
    role: 'user' 
  });

  if (error) {
    console.error('Error signing up:', error.message);
  } else {
    console.log('Signed up successfully:', data);
  }
}

document.querySelector('form').addEventListener('submit', handleSubmit);
