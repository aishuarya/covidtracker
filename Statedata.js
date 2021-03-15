import react ,{Component} from 'react';
import Axios from 'axios';
import { Accordion ,Card,Button}  from 'react-bootstrap';
class Statedata extends Component{
    constructor(){

        super();
        this.state={
            stateData:{}
        }
    }
    componentDidMount(){
        Axios.get("https://api.covid19india.org/state_district_wise.json").then (response=>{
            this.setState({stateData:response.data})

        });
    }
    render(){
        let keys =Object.keys(this.state.stateData);

        return(<div className="row">
            <div className="col-md-12">
            <Accordion>
                {
                    keys.map((itm,ky)=>{
                        let districts=this.state.stateData[itm].districtData;
                        let districtkeys=Object.keys(districts);
                        let totalactive=0;
                        let totalconfirmed=0;
                        let totaldeaths=0;
                        let totalrecovery=0;
                        let district_list=[];
                        for (let x in districts){
                            totalactive=totalactive + districts[x].active;
                            totalconfirmed=totalconfirmed + districts[x].confirmed;
                            totaldeaths=totaldeaths + districts[x].deceased;
                            totalrecovery=totalrecovery + districts[x].recovered;
                            let ob=districts[x];
                            ob["district_name"]=x;
                            district_list.push(ob);
                        }

                        return (
                                    <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="light" eventKey={ky}>
                                       <h6>{itm}</h6> 
                                       
                                       <table className="table table-bordered table-stripped">
                                            <tr>
                                                <td className="btn-dark p-2 mr-4 ">-Total Cases{" : "+totalconfirmed} </td>
                                                <td className="btn-dark p-2 mr-4 "> -Active {" : "+totalactive}</td>
                                                <td className="btn-success p-2 mr-4 ">-Recovered{" : "+totalrecovery}</td>
                                                <td className="btn-danger p-2 mr-4 ">-Deaths{" : "+totaldeaths}</td>
                                            </tr>
                                            </table>
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey={ky}>
                                        <Card.Body>
                                            
                                            <table className="table table-bordered table-stripped"> 
                                                <thead>
                                                    <tr>
                                                        <td>
                                                            District
                                                        </td>
                                                        <td>
                                                            Confirmed
                                                        </td>
                                                        <td>
                                                            Active
                                                        </td>
                                                        <td>
                                                            Recovered
                                                        </td>
                                                        <td>
                                                            Deaths
                                                        </td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                    district_list.map((itm,ky)=>{
                                                        return (
                                                                <tr>
                                                                <td>{itm.district_name}</td>
                                                                <td>{itm.confirmed}</td>
                                                                <td>{itm.active}</td>
                                                                <td>{itm.recovered}</td>
                                                                <td>{itm.deceased}</td></tr>
                                                        )
                                                    })}
                                                </tbody>
                                            </table>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                    </Card>
                        )
                    }
                    
                    )
                }
                    
                    
                </Accordion>
            </div>

        </div>
                 )
    }
}
export default Statedata;