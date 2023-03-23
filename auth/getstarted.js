import supabase from './supabaseClient';

async function handleSubmit(event) {
  event.preventDefault(); // prevent form from refreshing the page

  const form = event.target;
  const formData = new FormData(form);

  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password');
  const role = 'user'; // set user role to "user" by default


  try {
    const { data, error } = await supabase
      .from('users')
      .insert({ name, email, password, role });

    if (error) {
      console.error('Error signing up:', error.message);
    } else {
      console.log('Signed up successfully:', data);
      form.reset(); // reset the form fields
    }
  } catch (error) {
    console.error('Error signing up:', error.message);
  }
}

document.querySelector('#signup-form').addEventListener('submit', handleSubmit);
