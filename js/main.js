const navigation = document.querySelector('.hidden');
const close = document.querySelector('#close');
const option = document.querySelector('#option');
const footer = document.getElementById('footerPart');
const teachersList = document.getElementById('teachersList');

const teachersData = {
  title: 'Teachers',
  images: ['./img/teacher1.png',
    './img/teacher2.png',
    './img/teacher3.png',
    './img/teacher4.png',
    './img/teacher5.png',
    './img/teacher6.png',
  ],
  name: ['Harriet Tubman', 'Jane Austen', 'Susan B. Anthony', 'Fuad Moin', 'Margaret Mead', 'Ruth Bader Ginsberg'],
  description: ['Tubman Proffesor of Entreprenural Legal Studies at Harvard law school in 2006',
    'Austen Proffesor of Entreprenural Legal Studies at Harvard law school in 2006',
    'Anthony Proffesor of Entreprenural Legal Studies at Harvard law school in 2006',
    'Fuad Moin Proffesor of Entreprenural Legal Studies at Harvard law school in 2006',
    'Margaret Mead Proffesor of Entreprenural Legal Studies at Harvard law school in 2006',
    'Ruth Bader Proffesor of Entreprenural Legal Studies at Harvard law school in 2006',

  ],

  details: ['Tubman studies common-based peer production, and published her seminal book The Wealth of Networks in 2006.',

    'Austen studies common-based peer production, and published her seminal book The Wealth of Networks in 2006.',
    'Anthony studies common-based peer production, and published her seminal book The Wealth of Networks in 2006.',
    'Moin studies common-based peer production, and published his seminal book The Wealth of Networks in 2006.',
    'Mead studies common-based peer production, and published her seminal book The Wealth of Networks in 2006.',
    'Bader studies common-based peer production, and published her seminal book The Wealth of Networks in 2006.',
  ],
  button: ['MORE', './img/seeMore.png'],

};

option.addEventListener('click', () => {
  navigation.style.display = 'block';
});

close.addEventListener('click', () => {
  navigation.style.display = 'none';
});

teachersList.classList.add('featured');
teachersList.innerHTML = `
  <header class="teachersName">
  <h3 tabindex="0" class="main-Program">${teachersData.title}</h3>
  <hr class="pink" />
</header>
<main id="mainList2" class="programList">
<div class="teachersGroupOne">
  <article class="list">
    <div class="imgcontainer">
      <img tabindex="0" src=${teachersData.images[0]} alt="" />
    </div>
    <div class="content">
      <small tabindex="0" class="name">${teachersData.name[0]}</small>
      <p tabindex="0" class="person">${teachersData.description[0]}
      </p>
      <p tabindex="0" class="description">${teachersData.details[0]}
      </p>
    </div>
  </article>
  <article class="list">
    <div class="imgcontainer">
      <img tabindex="0" src=${teachersData.images[1]} alt="" />
    </div>
    <div class="content">
      <small tabindex="0" class="name">${teachersData.name[1]}</small>
      <p tabindex="0" class="person">${teachersData.description[1]}
      </p>
      <p tabindex="0" class="description">${teachersData.details[1]}
      </p>
    </div>
  </article>
  <article class="list">
    <div class="imgcontainer">
      <img tabindex="0" src=${teachersData.images[2]} />
    </div>
    <div class="content">
      <small tabindex="0" class="name">${teachersData.name[2]}</small>
      <p tabindex="0" class="person">${teachersData.description[2]}
      </p>
      <p tabindex="0" class="description">${teachersData.details[2]}
      </p>
    </div>
  </article>
</div>

<div class="teacherGroupTwo">
  <article class="list">
    <div class="imgcontainer">
      <img tabindex="0" src=${teachersData.images[3]} alt="" />
    </div>
    <div class="content">
      <small tabindex="0" class="name">${teachersData.name[3]}</small>
      <p tabindex="0" class="person">${teachersData.description[3]}
      </p>
      <p tabindex="0" class="description">${teachersData.details[3]}
      </p>
    </div>
  </article>
  <article class="list">
    <div class="imgcontainer">
      <img tabindex="0" src=${teachersData.images[4]} alt="" />
    </div>
    <div class="content">
      <small tabindex="0" class="name">${teachersData.name[4]}</small>
      <p tabindex="0" class="person">${teachersData.description[4]}
      </p>
      <p tabindex="0" class="description">${teachersData.details[4]}
      </p>
    </div>
  </article>
  <article class="list">
    <div class="imgcontainer">
      <img tabindex="0" src=${teachersData.images[5]} alt="" />
    </div>
    <div class="content">
      <small  tabindex="0" class="name"> ${teachersData.name[5]}</small>
      <p  tabindex="0" class="person">${teachersData.description[5]}
      </p>
      <p tabindex="0" class="description">${teachersData.details[5]}
      </p>
    </div>
  </article>
</div>
</main>
<main id="mainList" class="programList">
      
<article class="list">
  <div class="imgcontainer">
    <img src=${teachersData.images[0]} alt="" />
  </div>
  <div class="content">
    <small class="name">${teachersData.name[0]}</small>
    <p class="person">${teachersData.description[0]}
    </p>
    <p class="description">${teachersData.details[0]}
    </p>
  </div>
</article>
<article class="list">
  <div class="imgcontainer">
    <img src=${teachersData.images[1]} alt="" />
  </div>
  <div class="content">
    <small class="name">${teachersData.name[1]}</small>
    <p class="person">${teachersData.description[1]}
    </p>
    <p class="description">${teachersData.details[1]}
    </p>
  </div>
</article>
<div id="article">
<article class="list">
<div class="imgcontainer">
  <img src=${teachersData.images[2]} alt="" />
</div>
<div class="content">
  <small class="name">${teachersData.name[2]}</small>
  <p class="person">${teachersData.description[2]}
  </p>
  <p class="description">${teachersData.details[2]}
  </p>
</div>
</article>
<article class="list">
<div class="imgcontainer">
  <img src=${teachersData.images[3]} alt="" />
</div>
<div class="content">
  <small class="name">${teachersData.name[3]}</small>
  <p class="person">${teachersData.description[3]}
  </p>
  <p class="description">${teachersData.details[3]}
  </p>
</div>
</article>
<article class="list">
<div class="imgcontainer">
  <img src= ${teachersData.images[4]} alt="" />
</div>
<div class="content">
  <small class="name">${teachersData.name[4]}</small>
  <p class="person">${teachersData.description[4]}
  </p>
  <p class="description">${teachersData.details[4]}
  </p>
</div>
</article>
<article class="list">
<div class="imgcontainer">
  <img src=${teachersData.images[5]} alt="" />
</div>
<div class="content">
  <small class="name"> ${teachersData.name[5]}</small>
  <p class="person">${teachersData.description[5]}
  </p>
  <p class="description">${teachersData.details[5]}
  </p>
</div>
</article>
</div>
</main>
<button tabindex="0" type="button" id="seemore2" class="seeMore">
${teachersData.button[0]} <img class="down" src=${teachersData.button[1]} alt="" />
</button>
  `;

const btnSeeMore = document.querySelector('#seemore2');
const mainList = document.getElementById('article');
function populateFooter() {
  footer.innerHTML = `
    <div class="black">
    <div class="partner">
      <small tabindex="0">partner</small>
      <hr />
    </div>
    <div class="desktopfooter">
      <div class="mozilla">
        <small tabindex="0" class="moz">mozilla</small>
        <small tabindex="0" class="google">Google</small>
        <samll tabindex="0" class="naver">NAVER</samll>
      </div>
      <div class="daumkakao">
        <small tabindex="0" class="daum">daumkakao</small>
        <small tabindex="0" class="airbnb">
          <img class="bnb" src="./img/airbnb.png" alt="" />
          airbnb
        </small>
      </div>
    </div>
  </div>
  <div class="creative">
    <small tabindex="0" class="create">
      <img class="copy" src="./img/cc.png" alt="" />
      creative <br />
      commons korea
    </small>
    <small tabindex="0" class="create2"
      >2015 Creative Commons Korea <br />
      Some Rights Reserved</small
    >
  </div>
    
    `;
}
populateFooter();

btnSeeMore.addEventListener('click', () => {
  btnSeeMore.style.display = 'none';
  mainList.style.display = 'block';
  footer.style.display = 'flex';
});