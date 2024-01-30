import Section11 from "@/components/Section11"
import Section9 from "@/components/Section9"
import Image from "next/image"
// import style from '../styles/Navbar.module.css'
import style from "../../styles/Navbar.module.css"



const Signin = () => {
  return (
    <>
    <div class="container d-flex">
    
        <div className={style.sigin} class="col-6">
        <h2>Log in to your Account</h2>
            <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Username</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        
                    </div>
                    <div class="mb-3 my-5">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input bg-primary" id="exampleCheck1"/>
                        <div class="d-flex gap-5">
                        <label class="form-check-label" for="exampleCheck1">Remember me</label>
                        <div >Forget password?</div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Log In</button>
            </form>
        </div>

        <div class="col-6">
            <Image src="/loginwoman.png" alt="" width="500" height="500"/>
        </div>
    </div>


    <Section9/>
    <Section11/>



    </>
  )
}

export default Signin