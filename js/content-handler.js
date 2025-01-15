document.addEventListener("DOMContentLoaded", () => {
    const tutorialButtons = document.querySelectorAll('.tutorial-button');

    tutorialButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tutorialId = button.getAttribute('data-tutorial');

            // Data konten berdasarkan tutorial ID
            let pageTitle = ''; 
            let content = '';
            if (tutorialId === '1') {
                pageTitle = "Tutorial Membuat Sertifikat digital dengan cepat dengan QuickCert"
                content = `  <div class="title-content">
                                <h2 class="title-card">Tutorial Membuat Sertifikat digital dengan cepat dengan QuickCert</h2>
                                <div class="container-content">
                                    <h3 class="subtitle-card">Buat Sertifikat dengan cepat menggunakan QuickCert</h3>
                                    <p class="deskripsi-card">QuickCert adalah situs web untuk membuat sertifikat digital secara cepat dan mudah. Dengan beragam template yang dapat disesuaikan, pengguna bisa menambahkan teks, logo, dan elemen lainnya. QuickCert juga mendukung pengelolaan nama peserta secara massal dan memungkinkan unduhan sertifikat dalam format digital.</p>
                                    <h3 class="subtitle-card">1. Upload Template Sertifikat</h3>
                                    <p class="deskripsi-card">pada halaman utama klik My template lalu kalian tinggal Upload saja template yang sudah kalian buat di menu My Template</p>
                                    <img src="./image/tutorial yang pertama-1.png">
                                    <h3 class="subtitle-card">2. Buat Project</h3>
                                    <p class="deskripsi-card">lalu kalian masuk ke menu New Project dan klik new blank Project</p>
                                    <img src="./image/tutorial yang pertama-2.png">
                                    <img src="./image/tutorial yang pertama-3.png">
                                    <img src="./image/tutorial yang pertama-4.png">
                                    <p class="deskripsi-card">setelah itu atur ukuran kertas sesuai keinginan kalian dan jangan lupa memberi nama project kalian, setelah itu kalian diarahkan ke halaman selanjutnya</p>
                                    <h3 class="subtitle-card">3. Gunakan Sertifikat yang sudah kalian upload</h3>
                                    <p class="deskripsi-card">Upload Template atau background dimenu<strong> Upload background</strong> dan klik Use This Template</p>
                                    <img src="./image/tutorial yang pertama-5.png">
                                    <img src="./image/tutorial yang pertama-6.png">
                                    <h3 class="subtitle-card">4. Buat Nama Penerima Sertifikat</h3>
                                    <p class="deskripsi-card">setelah itu kalian masukan nama para penerima Sertifikat digital dibagian <strong>Dynamic Text</strong> Atur ukuran text dan jenis font yang kalian inginkan</p>
                                    <img src="./image/tutorial yang pertama-7.png">
                                    <p class="deskripsi-card">Untuk mengatur posisi text yang ada buat klik fitur<strong>Select Tool</strong></p>
                                    <img src="./image/tutorial yang pertama-8.png">
                                    
                                    <p class="deskripsi-card">apabila anda ingin menambahkan Logo atau gambar klik menu <strong>Add Image</strong> lalu pilih logo yang ada di folder anda</p>
                                    <h3 class="subtitle-card">5. Melakukan Manage Data</h3>
                                    <p class="deskripsi-card">Fitur Manage Data di QuickCert dirancang untuk mempermudah pengelolaan pembuatan sertifikat secara massal berdasarkan jumlah nama yang diunggah. Melalui fitur ini, pengguna dapat mengimpor daftar nama penerima sertifikat sekaligus, sehingga QuickCert otomatis menghasilkan sertifikat sesuai jumlah nama yang ada dalam daftar. Hal ini sangat bermanfaat untuk acara dengan banyak peserta, seperti seminar atau pelatihan, karena menghemat waktu dan memastikan setiap peserta menerima sertifikat yang dipersonalisasi.</p>
                                    <img src="./image/tutorial yang pertama-10.png">
                                    <img src="./image/tutorial yang pertama-11.png">
                                    <p class="deskripsi-card">input nama pada penerima sertifikat digital pada fitur manage data setelah itu klik save, untuk melihat
                                    hasil sertifkat sebelum diunduh klik fitur <strong>Preview Certificate</strong> </p>
                                    <img src="./image/tutorial yang pertama-12.png">
                                    <p class="deskripsi-card">setelah itu klik fitur <strong>Generate Certificate</strong> setelah diklik otomatis download,hasil download berupa zip</p>
                                     <img src="./image/tutorial yang pertama-13.png">
                                </div>
                            </div>`;
                   
            } else if (tutorialId === '2') {
                pageTitle = "Tutorial Drag & Drop: Mengupload Template dengan Cepat dan Mudah";
                content = `
                        <div class="title-content">
                            <h2 class="title-card">Tutorial Drag & Drop: Mengupload Template dengan Cepat dan Mudah</h2>
                            <div class="container-content">
                                <h3 class="subtitle-card">Mengupload Template dengan drag & drop</h3>
                                <p class="deskripsi-card">Dalam tutorial ini, Anda akan belajar cara mengunggah template dengan mudah menggunakan fitur drag & drop. Metode ini memungkinkan Anda untuk menyeret file langsung dari komputer ke aplikasi atau situs web tanpa harus mencari opsi unggah yang rumit. Kami akan membahas langkah-langkah praktis, tips, dan solusi umum untuk masalah yang mungkin Anda hadapi. Dengan panduan ini, proses upload template Anda akan menjadi lebih cepat dan efisien. Ideal untuk pemula maupun pengguna berpengalaman!</p>
                                <h3>Langkah Pertama</h3>
                                <p>pada Halaman Utama terdapat menu My Template, lalu klik dan terdapat menu Upload Template Sertifikat</p>
                                <img src="./image/drag&drop-1.png">
                                <h3>Langkah Kedua</h3>
                                <p>lalu kalian tinggal drag & drop saja Template yang sudah kalian buat</p>
                                <img src="./image/drag&drop-2.png">
                            </div>
                        </div>`;
            } else if (tutorialId === '3') {
                pageTitle = "cara membeli Coin di QuickCert"
                content = `
                    <div class="title-content">
                    <h2 class="title-card">cara membeli Coin di QuickCert</h2>
                    <div class="container-content">
                        <p class="deskripsi-card">Quickcert Coin adalah solusi pembayaran praktis dan fleksibel di platform Quickcert yang memungkinkan pengguna untuk mengontrol biaya pembuatan sertifikat digital secara efisien. Dengan Coin, pengguna dapat menghemat waktu dan biaya, serta memperoleh pengalaman penggunaan yang lebih baik dan transparan.</p>
                        <h3 class="subtitle-card">Top up coin QuickCert</h3>
                        <p class="deskripsi-card">masuk ke menu Buy More Coin</p>
                        <img src="./image/tutorial topup-1.png">
                        <p class="deskripsi-card">lalu akan muncul pop up menu piihan pembelian coin mulai dari Rp 10.000 hingga Rp 500.000</p>
                         <img src="./image/tutorial topup-2.png">
                         <p class="deskripsi-card">lalu pilih susuai dengan kebutuhan kalian dan klik <strong>Buy Now</strong> dan akan muncul metode pembayaran mulai Kartu Kredit/Debit, Virtual account, Gopay, Akulaku paylater dan Qris</p>
                        <img src="./image/tutorial topup-3.png">
                         <p class="deskripsi-card">setelah memilih metode pembayaran silahkan melakukan pembayaran sesuai dengan metode yang dipilih </p>
                    </div>
                </div>`;
            } else if(tutorialId === '4'){
                pageTitle = "Cara Menggunakan fitur Select Tool"
                content = `
                    <div class="title-content">
                    <h2 class="title-card">Cara Menggunakan fitur Select Tool</h2>
                    <div class="container-content">
                        <p class="deskripsi-card">Fitur "Select Tool" pada QuickCert, web untuk pembuatan sertifikat instan, dirancang untuk membantu pengguna menyesuaikan posisi teks pada sertifikat secara interaktif. Dengan fitur ini, pengguna dapat memilih elemen teks tertentu di desain sertifikat, lalu memindahkannya dengan mudah ke posisi yang diinginkan menggunakan kursor. Fitur ini memungkinkan pengguna untuk menempatkan teks seperti nama peserta, tanggal, atau detail lainnya pada lokasi yang paling sesuai, memastikan tata letak sertifikat terlihat rapi dan profesional.</p>
                        <h3 class="subtitle-card">Select Tool</h3>
                        <p class="deskripsi-card">klik fitur Select Tool</p>
                        <img src="./image/select tool-1.png">
                         <p class="deskripsi-card">lalu arahkan pada gambar atau text yang ingin disesuaikan posisinya</p>
                        <iframe title="vimeo-player" src="https://player.vimeo.com/video/1027534594?h=f25f000de2" allowfullscreen></iframe>
                    </div>
                </div>`;

            }else if(tutorialId === '5'){
                pageTitle = "Tutorial Menggunakan Manage Data"
                content = `
                    <div class="title-content">
                    <h2 class="title-card">Tutorial Menggunakan Manage Data</h2>
                    <div class="container-content">
                        <p class="deskripsi-card">Fitur "Manage Data" pada QuickCert memungkinkan pengguna untuk menginput daftar nama penerima sertifikat secara mudah dan efisien. Melalui fitur ini, pengguna dapat menambahkan, mengedit, atau menghapus data nama yang akan dicantumkan pada sertifikat. Jumlah sertifikat yang dihasilkan oleh QuickCert akan otomatis mengikuti jumlah nama yang diinput di fitur "Manage Data". Dengan demikian, pengguna bisa menghasilkan banyak sertifikat dalam sekali proses, sesuai dengan daftar nama yang telah dimasukkan, sehingga sangat memudahkan dalam pengelolaan sertifikat untuk acara atau kegiatan dengan banyak peserta.</p>
                        <h3 class="subtitle-card">Manage Data</h3>
                        <img src="./image/manage data-1.png">
                         <p class="deskripsi-card">lalu input nama para penerima sertifikat dikolom yang sudah disediakan setelah sudah di input lalu klik save kemudian klik <strong>Generate Certificate</strong></p>
                        <iframe title="vimeo-player" src="https://player.vimeo.com/video/1027533708?h=40abedfa08"></iframe>
                    </div>
                </div>`;
            }else if(tutorialId === '6'){
                pageTitle = "Cara Menambahkan Gambar atau Logo di QuickCert"
                content = `
                    <div class="title-content">
                    <h2 class="title-card">Cara Menambahkan Gambar atau Logo di QuickCert</h2>
                    <div class="container-content">
                        <p class="deskripsi-card">Fitur "Add Image" pada QuickCert memungkinkan pengguna untuk menambahkan gambar ke dalam desain sertifikat. Dengan fitur ini, pengguna bisa mengunggah logo, tanda tangan, atau elemen visual lainnya yang relevan untuk mempercantik atau memberi identitas pada sertifikat. Gambar yang diunggah dapat diatur posisinya, diubah ukurannya, dan ditempatkan pada area sertifikat yang diinginkan untuk menyesuaikan tampilan sesuai kebutuhan. Fitur ini membantu menciptakan sertifikat yang lebih personal dan profesional dengan elemen visual tambahan.</p>
                        <h3 class="subtitle-card">Add Gambar atau Logo</h3>
                        <p class="deskripsi-card">Klik fitur Add image seperti gambar dibawah ini</p>
                        <img src="./image/add image-1.png">
                        <p class="deskripsi-card">Ketika diklik otomatis akan membuka file yang ada pada perangkat anda lalu kalian pilih saja gambar atau logo yang ingin kalian gunakan pada sertifikat anda</p>
                    </div>
                </div>`;
            
            }
           


            // Simpan konten ke sessionStorage
            sessionStorage.setItem('content', content);
            sessionStorage.setItem('pageTitle', pageTitle);

            // Arahkan ke halaman fillbox.html
            window.location.href = './fillbox.html';
        });
    });

    
    
});
function ShowCard() {
    const hiddenCards = document.querySelector('.tutorial-button.hidden');
    document.querySelector('.btn').innerHTML = 'Loading...';

    setTimeout(() => {
        hiddenCards.classList.remove('hidden');

        // Sembunyikan tombol "Load More"
        document.querySelector('.btn').style.display = 'none';

        // Simpan status tombol "Load More" di Local Storage
        localStorage.setItem('loadMoreClicked', 'true');
    }, 2000);
}


const LoadMoreStatus = localStorage.getItem('loadMoreclicked');

if(LoadMoreStatus === 'true'){
    const hiddenCards = document.querySelector('.tutorial-button.hidden');
    hiddenCards.classList.remove('hidden');

    // Sembunyikan tombol "Load More"
    document.querySelector('.btn').style.display = 'none';

}
// function checkLoadMoreStatus() {
//     const hiddenCards = document.querySelector('.tutorial-button.hidden');
//     const loadMoreButton = document.querySelector('.btn');

//     // Periksa Session Storage
//     if (sessionStorage.getItem('loadMoreClicked') === 'true') {
//         // Tampilkan kartu dan sembunyikan tombol
//         hiddenCards.classList.remove('hidden');
//         loadMoreButton.style.display = 'none';
//     }
// }




