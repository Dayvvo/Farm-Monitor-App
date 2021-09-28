let currentPage= 1;
let rowsPerPage= 5;

const changeCurrentPage = ()=>{
  document.querySelectorAll('#paginated tr').forEach((e,key)=>{
    if ((key+1)<= (currentPage * rowsPerPage)  && (key+1) > ((currentPage-1) * rowsPerPage )  ) {
      e.classList.remove('none');
    }
    else{
      e.classList.add('none');
    }
  });

}

let trl = document.querySelectorAll('#paginated tr').length;

const loadPageBtns = ()=>{
    let returnBtns = (trl/rowsPerPage) + (trl % rowsPerPage ? 1:0 );    

    let buttonArr = []

    for (let index = 0; index < returnBtns; index++) {
        let buttonEl = document.createElement("button");
        buttonEl.className = "faint cursor boxx small";
        buttonEl.innerText = `${index+1}`;
        buttonEl.addEventListener('click',(event)=>{
          currentPage= +event.target.textContent;
          changeCurrentPage();
        });

        buttonArr.push(buttonEl);


        document.querySelector('.pageBtns').replaceChildren(...buttonArr);

      }


}

$(document).ready(function(){

    $('.input-daterange').datepicker({
    format: 'dd-mm-yyyy',
    autoclose: true
    });

    changeCurrentPage();    
    
    loadPageBtns();

    document.querySelector('.select').addEventListener('change',(ev)=>{
        rowsPerPage = (+ev.target.value);
        currentPage=1;
        loadPageBtns();
        changeCurrentPage();
        
    })

    document.querySelectorAll('.select option').forEach((ev)=>{
        if (!(trl >=ev.value) ) {
          ev.classList.toggle('none');
        }
    })

    // document.querySelectorAll('.rows_per').forEach(e=>{
    //   console.log('rows per',e);
    //   e.addEventListener('click',(ev)=>{
    //     console.log('ev click triggered');
    //     rowsPerPage = (+ev.target.value);
    //     loadPageBtns();
    //   })
    // })


});


// document.querySelectorAll('.pageBtns button').forEach(e=>{
//   e
// })

let tabHeader = document.querySelector(".mappas");
let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
let tabBody = document.getElementsByClassName("tab-body")[0];
 
let tabsPane = tabHeader.getElementsByTagName("a");
 
for(let i=0;i<tabsPane.length;i++){
  tabsPane[i].addEventListener("click",function(e){
    e.preventDefault();
    tabHeader.getElementsByClassName("active")[0].classList.remove("active");
    tabsPane[i].classList.add("active");
    tabBody.querySelector(".active").classList.remove("active");
    tabBody.querySelectorAll(".statbox")[i].classList.add("active");
    
    // tabIndicator.style.left = `calc(calc(100% / 4) * ${i})`;
  });
}




