import React,{ useState }  from "react";
import category from "../category";
import product from "../product";
import Box1 from "./Box1";
import Box2 from "./Box2";
import ReactStar from "react-rating-stars-component";


function Filter()
{
  const[color,setcolor]=useState('');
  const[rating,setrating]=useState('');
  const[temp,settemp]=useState('');
  const[to,seto]=useState('');
  const[from,setfrom]=useState('');
  const [name,setname]=useState('');
  const[searchitem,setsearchitem]=useState('');


function clear()
{
  window. location. reload();
}

function submit()
{
  setcolor(document.getElementById("color").value)
  setrating(temp)
  setfrom(document.getElementById("from").value)
  seto(document.getElementById("to").value)
}
function clearrange()
{
  document.getElementById('to').value = ''
  document.getElementById('from').value = ''
}

function click(id)
{
  setname(id)
  submit()
}


  return(

<div>
     {category.map(value => (
     <button className="category" onClick={()=>{click(value.id)}}><Box1  name={value.name} image={value.image}  /></button>
     ))}

 <div className="filter" >

     <p>price range</p>
     <input placeholder=" From($) " style={{width:'60px'}}  id="from"/>
     <input placeholder=" To($) "  style={{width:'60px'}} id="to"/>
  <div >


     <button className='submit' style={{background: '#FF6347'}} onClick={clearrange}>Clear</button>
     <br/>
     <p>color</p>
     <input type="text"  id="color" placeholder="  Enter color"/>
     <br/>
     <button className='submit' style={{background: '#FF6347'}} onClick={()=>document.getElementById('color').value = ''}>Clear</button>
     <br/>

     <p>Average rating</p>


    <button onClick={()=>settemp(1)}  className="category"><ReactStar count={1}  className="star" edit={false}   color={"#ffc107" }  size={20}  /></button><br/>
    <button onClick={()=>settemp(2)} className="category"><ReactStar count={2}  className="star" edit={false}   color={"#ffc107" }  size={20} /></button><br/>
    <button onClick={()=>settemp(3)} className="category"><ReactStar count={3}  className="star" edit={false}   color={"#ffc107" }  size={20} /></button><br/>
    <button onClick={()=>settemp(4)} className="category"><ReactStar count={4}  className="star" edit={false}   color={"#ffc107" }  size={20} /></button><br/>
    <button onClick={()=>settemp(5)} className="category"><ReactStar count={5}  className="star" edit={false}   color={"#ffc107" }  size={20} /></button><br/>


    <button className='submit' style={{background: '#FF6347'}} onClick={()=>settemp('')}>Clear</button>
    <br/>
    <button className='submit' style={{background: 'blue'}} onClick={submit}>Submit</button>
    <button className='submit' style={{background: 'red'}} onClick={clear}>Clear All</button>

   </div>
  </div>

    <input className="input" placeholder="Search" onChange={event=>{setsearchitem(event.target.value) }}/>
  <div style={{clear:'both'}}>


  {product.filter((val) =>
   {

     if((val.categoryId==name || name=='') &&(val.name.toLowerCase().includes(searchitem.toLowerCase()) || searchitem==""))
      {

        if( val.color.toLowerCase()==color.toLowerCase()&& rating==''&& to=="" && from =="")//1
         return val
        else if(val.rating==rating && color=='' && to=="" && from =="")//2
         return val
        else if(val.price< to && from <val.price  && color=='' && rating=='' )//3
         return val
        else if(val.color.toLowerCase()==color.toLowerCase() && val.rating==rating && to=="" && from =="" )//1,2
         return val
        else if(val.color.toLowerCase()==color.toLowerCase() && rating=='' && val.price< to && from <val.price)//1,3
         return val
        else if(color=='' && val.rating==rating && val.price< to && from <val.price)//2,3
         return val
        else if(val.color.toLowerCase()==color.toLowerCase() && val.rating==rating && val.price< to && from <val.price)//1,2,3
         return val
        else if( rating=='' && color=='' && to=="" && from =="")//
         return val
      }


  }).map(value => (
        <Box2  name={value.name} rating={value.rating} image={value.image} price={value.price}/>
     ))}

 </div>
</div>

  )
}

export default Filter;
