

// aasgsagagadgdsgda    
// 
// 
// 
// 
// single

        const txt = document.getElementById('exampleInputEmail1')
        const but = document.getElementById('btn1')
        const but2 = document.getElementById('btn2')

        function f2() {
            // fetch('https://fakestoreapi.com/products')
            // .then((data)=>{
            //     return data.json();
            // }).then((objectdata)=>{
            //     // console.log(objectdata)
            //     let tabledata = "";
            //     objectdata.forEach(element => {
            //         // console.log(element)
                        
            //         tabledata+= ` <tr>
            //         <th scope="row">${element.title}</th>
            //         <td>${element.title}</td>
            //         <td>${element.description}</td>
            //         <td>${element.category}</td>
            //         <td><button type="button" class="btn btn-primary">Primary</button></td>
                    
            //       </tr>`
                  
            //     });
            //     document.getElementById("tbod").innerHTML=tabledata;   
            // })


        fetch('https://opensky-network.org/api/flights/all?begin=1517227200&end=1517230800')
        .then((flight)=>
        {
            return flight.json()
        }).then((fdata)=>{
            console.log(fdata);

            let tabledata = "";
            fdata.slice(0,10).forEach(element => {
                // console.log(element)
                    
                tabledata+= ` <tr>
                <th scope="row">${element.callsign}</th>
                <td>${element.estArrivalAirport}</td>
                <td>${element.estDepartureAirport}</td>
                <td>${element.category}</td>
                <td><button type="button" class="btn btn-primary">Book Now!</button></td>
                
              </tr>`
              
            });
            document.getElementById("tbod").innerHTML=tabledata;
        })
            
        }

        

        

        function f1(){

            console.log(`${txt.value}`)
            
        fetch(`https://fakestoreapi.com/products/${txt.value}`)
        .then((data)=>{
            return data.json();
        }).then((objectdata)=>{
            // console.log(objectdata)
            let tabledata = "";
            // objectdata.forEach(element => {
                console.log(objectdata)
                    
                tabledata+= ` <tr>
                <th scope="row">${objectdata.title}</th>
                <td>${objectdata.title}</td>
                <td>${objectdata.description}</td>
                <td>${objectdata.category}</td>
                
            </tr>`
            
            // });
            document.getElementById("tbod").innerHTML=tabledata;   
        })
            

        }



        but.addEventListener('click',f1)
        
        but2.addEventListener('click',f2)
