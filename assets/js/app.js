const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

async function displayUser(username) {
  $n.textContent = 'Cargando...';
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    console.log(data);
    $n.textContent = data.name || 'No name found';
    $b.textContent = data.blog || 'No blog found';
    $l.textContent = data.location || 'No location found';
  } catch (err) {
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err.message}`;
}

displayUser('stolinski');
