import { faFacebookF, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Login() {
    return (
        <div className='row justify-content-center'>
            <div className='col-8 my-4'>
                <h4 className='text-center mb-4'>Đăng nhập</h4>
                <form>
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example1">Địa chỉ email</label>
                        <input type="email" id="form2Example1" class="form-control" />
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example2">Mật khẩu</label>
                        <input type="password" id="form2Example2" class="form-control" />
                    </div>

                    <div class="row mb-4">
                        <div class="col d-flex justify-content-center">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="form2Example31" />
                                <label class="form-check-label" for="form2Example31"> Remember me </label>
                            </div>
                        </div>

                        <div class="col">
                            <a href="#!">Quên mật khẩu?</a>
                        </div>
                    </div>

                    <button type="button" class="btn btn-primary btn-block mb-4 w-100">Đăng nhập</button>

                    <div class="text-center">
                        <p>Chưa có tài khoản ? <a href="#!">Đăng ký</a></p>
                        <p>Hoặc đăng nhập bằng:</p>
                        <button type="button" class="btn btn-link btn-floating mx-1">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </button>

                        <button type="button" class="btn btn-link btn-floating mx-1">
                            <FontAwesomeIcon icon={faGoogle} />
                        </button>

                        <button type="button" class="btn btn-link btn-floating mx-1">
                            <FontAwesomeIcon icon={faTwitter} />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
