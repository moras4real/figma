import Section11 from '@/components/Section11'
import Section9 from '@/components/Section9'
import Image from 'next/image'
import React from 'react'

const Signup = () => {
  return (
    <>
    <div class="container d-flex">
    {/* className={sty.sigin} */}
        <div  class="col-6">

        <h2>Create an Account</h2>
            <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>                        
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email/Phone Number</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>                        
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Username</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>                        
                    </div>

                    <div class="mb-3 my-5">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>

                    <div class="mb-3 my-5">
                        <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>

                    <div>
                    <button type="submit" class="btn btn-warning w-100"><h3 class="fw-bold pt-2 pb-2">Sign Up</h3></button>
                    </div><br />

                    <div>
                    <button type="submit" class="btn btn-outline-warning bg-white w-100"><h3 class="fw-bold text-dark pt-3"> <Image src="/googlepix.png" alt="" width="25" height="25"/>Continue with google</h3></button>
                    </div>
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

export default Signup