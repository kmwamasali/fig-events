export default function fetchEvents(id) {
  const url = `http://localhost:8000/api/event${id ? '/'+id : 's'}`

  return new Promise((resolve) =>
    fetch(url)
      .then(response => resolve({ data: response.json() }))
  );
}