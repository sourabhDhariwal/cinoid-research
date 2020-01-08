import React from 'react';
// import ReactDom from 'react-dom';
import socket from '../../../socketConnection.js'

const emailRegExp = RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);


class ContactUs extends React.Component {
    constructor() {
        super();
        this.socket =socket;
        this.state ={
            first_name:'',
            last_name:'',
            email:'',
            subject:'',
            message:'',
            formErrors:{
                first_name:"",
                last_name:"",
                email:"",
                subject:"",
                message:"",  
            }
        };
        this.handleSubmit =this.handleSubmit.bind(this);
        this.handleChange =this.handleChange.bind(this)
        this.switchFunction =this.switchFunction.bind(this);
        this.formValid =this.formValid.bind(this);
       
    }
    componentDidMount(){
        this.socket.emit('addContactUsForm',{hello:123})
        
   } 
   
    formValid =({...rest}) =>{
    let valid =true;
    
    Object.keys(rest).forEach(key=>{
        if(rest[key]==""){
            valid =false;
        }
        if(!rest[key]){
            this.switchFunction(key,rest[key]);
        }
     });

     console.log("///////////////",this.state.formErrors)
     Object.keys(this.state.formErrors).forEach(key=>{
        console.log("11111111",key  )
        if(this.state.formErrors[key].length>0){
            valid =false;
            
        }
     });
     return valid;
    }
    
  

   handleSubmit =(event)=>{
    event.preventDefault();
    if(this.formValid(this.state)){
        console.log(
            `--submiting--
            First name  ${this.state.first_name}
            Last name  ${this.state.last_name}
            Email  ${this.state.email}
            Subject  ${this.state.subject}
            Message  ${this.state.message}
            `  
        )
        alert('Your Request Submitted Successfully.')
    }else{
        
    }
   }

  
   handleChange =(e)=>{
       e.preventDefault();
       const {name,value}= e.target;
       this.switchFunction(name,value);
     
   }

   switchFunction(name,value){
    let formErrors = this.state.formErrors; 
    
    switch(name){
        case 'first_name':
        formErrors.first_name =value.length < 3 || value.length<=0 ?"Enter First Name and minimum 3 characaters required":"";
        break; 

        case 'last_name':
        formErrors.last_name =value.length < 3 || value.length<=0 ?"Enter last Name and minimum 3 characaters required":"";
        break; 

        case 'email':
        formErrors.email =!emailRegExp.test(value) || value.length<=0 ?"Invalid email id":"";
        break; 

        case 'subject':
        formErrors.subject =value.length<=0 ?"Enter Subject ":"";
        break; 

        case 'message':
        formErrors.message =value.length <50  || value.length<=0 ?"Enter message and minimum 50 characaters required":"";
        break; 

        default:
        break;

    }
    this.setState({formErrors,[name]:value},()=>console.log(this.state))
   }

  render() {
      const {formErrors} = this.state;
    return (
        <div>
             <div className="main_content over_hidden">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-md-12  text-center ">
                            <img src="../../../assets/about_us.jpg" className="img-fluid"/>
                        </div>               
                    </div>
            </div>
        </div>

        <div className="container m_b_30 m_t_40">
            <div className="row">
                <div className="col-md-6">
                    <h3 className="line_head">
                        <span>CONTACT INFO</span>
                    </h3>
                    <ul className="custom_list">
                        <li className="flex_box flex_v_top m_b_20">
                            <img src="../../../assets/shape-1.jpg"/>
                            <p>
                                <b>VISIT US</b><br></br>
                                <span className="gray"> 
                                    <strong>  CINOID Research Private Limited</strong
                                    ><br/>Director Bunglow No. 57, BJ Nagar<br/>
                                    Near SMIT College, Jalgaon<br/>
                                    Maharashtra, 425001, India
                                </span>
                            </p>
                        </li>
                        <li className="flex_box flex_v_top m_b_20">
                            <img src="../../../assets/shape-2.jpg"/>
                            <p>
                                <b>MAIL US</b><br></br>
                                <span className="gray">support@yourmail.com</span>
                            </p>
                        </li>
                        <li className="flex_box flex_v_top m_b_20">
                            <img src="../../../assets/shape-3.jpg"/>
                            <p>
                                <b>CALL US</b><br></br>
                                <span className="gray">
                                <img className="alignnone wp-image-9699" src="../../../assets/US-Flag-150x150.png" alt="" width="20" height="20" /> <strong>+1-909-978-9795</strong><br/><img className="alignnone wp-image-9700" src="../../../assets/united-kingdom-150x150.png" alt="" width="20" height="20"/> <strong>+44 752 064 0013</strong>
                                </span>
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6 custom_form">
                    <h3 className="line_head">
                        <span>LEAVE MESSAGE</span>
                    </h3>
                    <form onSubmit={this.handleSubmit} noValidate   >
                        <div className="row">
                            <div className="col-md-6 m_b_15">
                                <input 
                                   type="text"
                                   placeholder="First Name" 
                                   name ="first_name"
                                   onChange={this.handleChange}/>
                                   {formErrors.first_name.length>0 && (
                                    <span className="errorMEssage">{formErrors.first_name}</span> 
                                   )}
                            </div>
                            <div className="col-md-6 m_b_15">
                                <input 
                                  type="text" 
                                  placeholder="Last Name"
                                  name ="last_name"
                                  onChange={this.handleChange}
                                  />
                                  {formErrors.last_name.length>0 && (
                                    <span className="errorMEssage">{formErrors.last_name}</span> 
                                   )}
                            </div>
                            <div className="col-md-6 m_b_15">
                                <input 
                                   type="text"  
                                   name ="email"
                                   placeholder="Email"
                                   onChange={this.handleChange}
                                   />
                                   {formErrors.email.length>0 && (
                                    <span className="errorMEssage">{formErrors.email}</span> 
                                   )}
                            </div>
                            <div className="col-md-6 m_b_15">
                                <input 
                                   type="text" 
                                   name ="subject"
                                   placeholder="Subject"
                                   onChange={this.handleChange}
                                   />
                                   {formErrors.subject.length>0 && (
                                    <span className="errorMEssage">{formErrors.subject}</span> 
                                   )}
                            </div>
                            <div className="col-md-12 m_b_15">
                                <textarea 
                                    name ="message"
                                    placeholder="Your Message" 
                                    rows="5"
                                    onChange={this.handleChange}
                                    >
                                </textarea>
                                {formErrors.message.length>0 && (
                                    <span className="errorMEssage">{formErrors.message}</span> 
                                   )}
                            </div>
                            <div className="col-md-12 m_b_15">
                                <button type="submit">SEND MESSAGE</button>
                            </div>
                        </div>
                    </form>
                 
                  
                </div>
            </div>
        </div>
      </div>
    );
  }
}


export default ContactUs;