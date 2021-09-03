import './App.css';
import React from 'react'
import axios from 'axios';


class Controller extends React.Component {
    state = {
      count: 0,
      data: [],
      sw: [],
      userData: [{age: 16, name: 'dima'}]
    };

  componentDidMount() {
    axios
    .get('https://maliatko.herokuapp.com/rest/visitingCheck')
    .then(response => this.setState({data: response.data}));
    
  }
  
 render (){ 
  return (
   
    
    <body>
    
    <table class="rectangle28">
        <thead class="thead">
            <tr>
    
           
                <th width="210px">ПІБ</th>
                <th width="115px">група</th>
                <th width="100px">код дитини</th>
                <th width="105px">кількість днів</th>
                <th width="135px">наявність пільги</th>
            </tr>
            
        </thead>
        <tbody class="tb">
            
                
                {this.state.data.map((data, idx) => (
                    <tr class="tr" key={idx}>
                       <td width="220px" >{data.child.surname} {data.child.name} {data.child.fatherName}</td>
                       <td width="100px" >молодша 3</td>
                       <td width="100px">{data.child.birthDocument}</td>
                       <td width="100px">14</td>
                       <td width="100px">немає</td>
                    </tr>
                    
                ))}
                
                    
            
        </tbody>
    </table>
    
    <div class="button">
        <p class="pp">
            Затвердити
        </p>
    </div>
    
    <div class="plus">
        <p class="pl">+</p>
    </div>
    
    <div class="minus">
    <p class="min">-</p>
    
    </div>
    
    
    
    <table >
        
        <tbody class="tb2">  
       <td class="moun">
           листопад 2021
       </td>
   
    <tr>
        <td class="moun">
            жовтень 2021
        </td>
    </tr>
    <tr>
        <td class="moun">
            вересень 2021
        </td>
    </tr>
    <tr>
        <td class="moun">
            серпень 2021
        </td>
    </tr>
    <tr >
        <td class="moun">
            липень 2021
        </td>
    </tr>
        </tbody>
    </table>
    
    </body>
    
 
  );
}
}
export default Controller;

