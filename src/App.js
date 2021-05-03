import React,{Component} from 'react';
import ProductList from './ProductList';
import { data } from './data';
import Example from './DatePicker';
import './App.css';


class App extends Component {
    constructor(){
        super()
        this.state = {
            products:data,
            productCopy:data,
            picDate:data,
            btns:['all', 'new', 'processing','finished']

        }
    }
    handleChange =(date) =>{
        console.log(date);
        let pickedDate;

        const result = this.picDate.filter(function(obj){
            return obj.orderDate===pickedDate;
        });
        console.log(result)
    }
    //filtering

    handleBtns =(event) => {

        console.log(event.target.value);
        let productCopy;

        if(event.target.value==='all'){
            productCopy=this.state.products;
        }
        else{
            productCopy=this.state.products.filter(item => item.orderStage===event.target.value)
        }

        this.setState({
            productCopy:productCopy
        })
    }




    render() {    
        return(
            <div>
                <p>ORDERLIST</p>
                <Example picDate={this.handleChange}/>
                <ProductList products={this.state.productCopy} 
                handleBtns={this.handleBtns}
                 btns={this.state.btns}/>
            </div>
            )
        }
}

export default App;