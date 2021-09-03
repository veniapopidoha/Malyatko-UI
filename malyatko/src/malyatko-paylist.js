import './App.css';
import React from 'react'
import axios from 'axios';

class Paylist extends React.Component {
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
  

 render() {
  return (
   
    
    <body>

    <table class="rectangle28">
        <thead class="thead">
            <tr>
    
           
                <th width="210px">Дата платежу</th>
                <th width="115px">Сума</th>
                <th width="100px">Опис</th>
                <th width="135px"></th>
            </tr>
            
        </thead>
        <tbody class="tb">
            <tr class="tr">
                <td width="220px" >09.06.2021</td>
                <td width="100px" >250грн</td>
                <td width="100px">Опис</td>
                <td width="100px">
                    <select>
                    <option>Прізвище Ім'я По-батькові</option>
                    {this.state.data.map((data, idx) => (
                        <option key={idx}>{data.child.name} {data.child.surname}</option>
                    ))}
                    
                  </select>
                </td>
            </tr>
            <tr class="tr">
                <td width="220px" >09.06.2021</td>
                <td width="100px" >250грн</td>
                <td width="100px">Опис</td>
                <td width="100px">
                <select>
                    <option>Прізвище Ім'я По-батькові</option>
                    {this.state.data.map((data, idx) => (
                        <option key={idx}>{data.child.name} {data.child.surname}</option>
                    ))}
                    
                  </select>
                </td>
            </tr>
            <tr class="tr">
                <td width="220px" >09.06.2021</td>
                <td width="100px" >250грн</td>
                <td width="100px">Опис</td>
                <td width="100px">
                <select>
                    <option>Прізвище Ім'я По-батькові</option>
                    {this.state.data.map((data, idx) => (
                        <option key={idx}>{data.child.name} {data.child.surname}</option>
                    ))}
                    
                  </select>
                </td>
            </tr>
            <tr class="tr">
                <td width="220px" >09.06.2021</td>
                <td width="100px" >250грн</td>
                <td width="100px">Опис</td>
                <td width="100px">
                <select>
                    <option>Прізвище Ім'я По-батькові</option>
                    {this.state.data.map((data, idx) => (
                        <option key={idx}>{data.child.name} {data.child.surname}</option>
                    ))}
                    
                  </select>
                </td>
            </tr>
            <tr class="tr">
                <td width="220px" >09.06.2021</td>
                <td width="100px" >250грн</td>
                <td width="100px">Опис</td>
                <td width="100px">
                <select>
                    <option>Прізвище Ім'я По-батькові</option>
                    {this.state.data.map((data, idx) => (
                        <option key={idx}>{data.child.name} {data.child.surname}</option>
                    ))}
                    
                  </select>
                </td>
            </tr>
            <tr class="tr">
                <td width="220px" >09.06.2021</td>
                <td width="100px" >250грн</td>
                <td width="100px">Опис</td>
                <td width="100px">
                <select>
                    <option>Прізвище Ім'я По-батькові</option>
                    {this.state.data.map((data, idx) => (
                        <option key={idx}>{data.child.name} {data.child.surname}</option>
                    ))}
                    
                  </select>
                </td>
            </tr>
            <tr class="tr">
                <td width="220px" >09.06.2021</td>
                <td width="100px" >250грн</td>
                <td width="100px">Опис</td>
                <td width="100px">
                <select>
                    <option>Прізвище Ім'я По-батькові</option>
                    {this.state.data.map((data, idx) => (
                        <option key={idx}>{data.child.name} {data.child.surname}</option>
                    ))}
                    
                  </select>
                </td>
            </tr>
            <tr class="tr">
                <td width="220px" >09.06.2021</td>
                <td width="100px" >250грн</td>
                <td width="100px">Опис</td>
                <td width="100px">
                <select>
                    <option>Прізвище Ім'я По-батькові</option>
                    {this.state.data.map((data, idx) => (
                        <option key={idx}>{data.child.name} {data.child.surname}</option>
                    ))}
                    
                  </select>
                </td>
            </tr>
            <tr class="tr">
                <td width="220px" >09.06.2021</td>
                <td width="100px" >250грн</td>
                <td width="100px">Опис</td>
                <td width="100px">
                <select>
                    <option>Прізвище Ім'я По-батькові</option>
                    {this.state.data.map((data, idx) => (
                        <option key={idx}>{data.child.name} {data.child.surname}</option>
                    ))}
                    
                  </select>
                </td>
            </tr>
            <tr class="tr">
                <td width="220px" >09.06.2021</td>
                <td width="100px" >250грн</td>
                <td width="100px">Опис</td>
                <td width="100px">
                <select>
                    <option>Прізвище Ім'я По-батькові</option>
                    {this.state.data.map((data, idx) => (
                        <option key={idx}>{data.child.name} {data.child.surname}</option>
                    ))}
                    
                  </select>
                </td>
            </tr>
            <tr class="tr">
                <td width="220px" >09.06.2021</td>
                <td width="100px" >250грн</td>
                <td width="100px">Опис</td>
                <td width="100px">
                <select>
                    <option>Прізвище Ім'я По-батькові</option>
                    {this.state.data.map((data, idx) => (
                        <option key={idx}>{data.child.name} {data.child.surname}</option>
                    ))}
                    
                  </select>
                </td>
            </tr>
            <tr class="tr">
                <td width="220px" >09.06.2021</td>
                <td width="100px" >250грн</td>
                <td width="100px">Опис</td>
                <td width="100px">
                <select>
                    <option>Прізвище Ім'я По-батькові</option>
                    {this.state.data.map((data, idx) => (
                        <option key={idx}>{data.child.name} {data.child.surname}</option>
                    ))}
                    
                  </select>
                </td>
            </tr>
            <tr class="tr">
                <td width="220px" >09.06.2021</td>
                <td width="100px" >250грн</td>
                <td width="100px">Опис</td>
                <td width="100px">
                <select>
                    <option>Прізвище Ім'я По-батькові</option>
                    {this.state.data.map((data, idx) => (
                        <option key={idx}>{data.child.name} {data.child.surname}</option>
                    ))}
                    
                  </select>
                </td>
            </tr>
            <tr class="tr">
                <td width="220px" >09.06.2021</td>
                <td width="100px" >250грн</td>
                <td width="100px">Опис</td>
                <td width="100px">
                <select>
                    <option>Прізвище Ім'я По-батькові</option>
                    {this.state.data.map((data, idx) => (
                        <option key={idx}>{data.child.name} {data.child.surname}</option>
                    ))}
                    
                  </select>
                </td>
            </tr>
            <tr class="tr">
                <td width="220px" >09.06.2021</td>
                <td width="100px" >250грн</td>
                <td width="100px">Опис</td>
                <td width="100px">
                <select>
                    <option>Прізвище Ім'я По-батькові</option>
                    {this.state.data.map((data, idx) => (
                        <option key={idx}>{data.child.name} {data.child.surname}</option>
                    ))}
                    
                  </select>
                </td>
            </tr>
            <tr class="tr">
                <td width="220px" >09.06.2021</td>
                <td width="100px" >250грн</td>
                <td width="100px">Опис</td>
                <td width="100px">
                <select>
                    <option>Прізвище Ім'я По-батькові</option>
                    {this.state.data.map((data, idx) => (
                        <option key={idx}>{data.child.name} {data.child.surname}</option>
                    ))}
                    
                  </select>
                </td>
            </tr>
            <tr class="tr">
                <td width="220px" >09.06.2021</td>
                <td width="100px" >250грн</td>
                <td width="100px">Опис</td>
                <td width="100px">
                <select>
                    <option>Прізвище Ім'я По-батькові</option>
                    {this.state.data.map((data, idx) => (
                        <option key={idx}>{data.child.name} {data.child.surname}</option>
                    ))}
                    
                  </select>
                </td>
            </tr>
            <tr class="tr">
                <td width="220px" >09.06.2021</td>
                <td width="100px" >250грн</td>
                <td width="100px">Опис</td>
                <td width="100px">
                <select>
                    <option>Прізвище Ім'я По-батькові</option>
                    {this.state.data.map((data, idx) => (
                        <option key={idx}>{data.child.name} {data.child.surname}</option>
                    ))}
                    
                  </select>
                </td>
            </tr>
            <tr class="tr">
                <td width="220px" >09.06.2021</td>
                <td width="100px" >250грн</td>
                <td width="100px">Опис</td>
                <td width="120px">
                <select>
                    <option>Прізвище Ім'я По-батькові</option>
                    {this.state.data.map((data, idx) => (
                        <option key={idx}>{data.child.name} {data.child.surname}</option>
                    ))}
                    
                  </select>
                </td>
            </tr>
            <tr class="tr">
                <td width="220px" >09.06.2021</td>
                <td width="100px" >250грн</td>
                <td width="100px">Опис</td>
                <td width="120px">
                <select>
                    <option>Прізвище Ім'я По-батькові</option>
                    {this.state.data.map((data, idx) => (
                        <option key={idx}>{data.child.name} {data.child.surname}</option>
                    ))}
                    
                  </select>
                </td>
            </tr>
            <tr class="tr">
                <td width="220px" >09.06.2021</td>
                <td width="100px" >250грн</td>
                <td width="100px">Опис</td>
                <td width="120px">
                <select>
                    <option>Прізвище Ім'я По-батькові</option>
                    {this.state.data.map((data, idx) => (
                        <option key={idx}>{data.child.name} {data.child.surname}</option>
                    ))}
                    
                  </select>
                </td>
            </tr>
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

export default Paylist;