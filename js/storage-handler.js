
document.addEventListener("DOMContentLoaded", () => {
  // Ambil konten dari sessionStorage
  const content = sessionStorage.getItem('content');
  const IDcontent = document.getElementById('IDcontent');
  const pageTitle = sessionStorage.getItem('pageTitle');

  // Pastikan elemen IDcontent ada sebelum mengisi
  if (IDcontent && content) {
      IDcontent.innerHTML = content;
  }
  if (pageTitle) {
    document.title = pageTitle;
}
});



















































// const contentbox = document.getElementById('IDcontent');

//   // Ambil data dari sessionStorage
//   const selectedUser = JSON.parse(sessionStorage.getItem('selectedUser'));

//   if (selectedUser) {

//       // build title//
//       const cardtitle = document.createElement('h2');
//       cardtitle.classList.add('title-card');
//       cardtitle.textContent = selectedUser.Title;
//       contentbox.appendChild(cardtitle);
      
//       //build subtitle//
//       const Subtitle = document.createElement('h3');
//       Subtitle.classList.add('subtitle-card');
//       Subtitle.textContent = selectedUser.Subtitle;
      
//       // build deskripsi//
//       const deskripsi = document.createElement('p');
//       deskripsi.classList.add('deskripsi-card');
//       deskripsi.textContent = selectedUser.Deskripsi;

//       //build image//
//       const image = document.createElement('img');
//       // image.classList.add('image');
//       image.src = selectedUser.gambar;


//       //   tambah element container
//     const container = document.createElement('div');
//     container.classList.add('container-content');

//     // masukan content yang sudah di build di atas//
//     container.appendChild(Subtitle);
//     container.appendChild(deskripsi);
//     container.appendChild(image);
    
//     contentbox.appendChild(container);  
//   } else {
//       contentbox.textContent = 'Data tidak tersedia.';
//   }