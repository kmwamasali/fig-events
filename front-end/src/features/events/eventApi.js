export default function fetchEvents(name) {
  const url = `http://localhost:8000/api/event${name ? '/'+name : 's'}`

  return new Promise((resolve) =>
    fetch(url)
      .then(response => resolve({ data: response.json() }))
  );
}