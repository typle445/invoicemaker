let items = document.querySelector('#items');
let Form = document.querySelector('form');
let Btn = document.querySelector('#addBtn');
let Quantity = document.querySelector('#quantity');
let TD = document.querySelector('#TD');
let total = document.querySelector('#total-cost');


let del = (event)=>{
    let Parent = event.target.parentElement.parentElement;
    Parent.classList.replace('animate__fadeInDown','animate__shakeX');
    setTimeout(function (){
        Parent.remove();
        calculateCost();
    },500)
};
Products.forEach((product)=>{
    let newOption = new Option(product.name,product.id);
    items.append(newOption)
});
let calculateCost = ()=>{
    const Costs = document.querySelectorAll('.cost');
    total.innerText = [...Costs].reduce((pv,cv)=>pv+Number(cv.innerText), 0);
}
Form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let currentProduct = Products.find((product)=>{return product.id == items.value});
    let newTr = document.createElement('tr');
    newTr.classList.add('animate__animated','animate__fadeInDown');
    TD.append(newTr);
    let cost = Quantity.value * currentProduct.price;
    newTr.innerHTML = `
<!--                        <td> -->
<!--                            <button class="btn btn-sm btn-outline-danger align-middle trash" > -->
<!--                                <i class="bi bi-trash3" onclick="del(event)"></i>-->
<!--                            </button>-->
<!--                        </td> -->
                        <td>
                            ${currentProduct.name}
                            <br>
                            <p class="small mb-0 text-danger del-btn" onclick="del(event)">[Delete]</p>
                        </td> 
                        <td class="text-end">${currentProduct.price}</td> 
                        <td class="text-end">${Quantity.value}</td> 
                        <td class="text-end cost">${cost}</td>`;
    Form.reset();
    calculateCost();
});


