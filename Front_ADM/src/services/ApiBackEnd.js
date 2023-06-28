export const getDenuncias = async (setLista) => {
  fetch('http://denuncia-assedio.herokuapp.com/denuncias')
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(res => {
      console.log(res);
      setLista(res);
    });
};

export const deleteDenuncia = async id => {
  console.log(id)
  fetch('http://denuncia-assedio.herokuapp.com/denuncias/' + id, {
    method: 'DELETE',
  }).then(response => {
    
    if (response.ok) {
      return true;
    } else {
      return false;
    }
  });
};
