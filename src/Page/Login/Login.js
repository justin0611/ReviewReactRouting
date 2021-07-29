import React from 'react'

export default function Login(props) {
    return (
        <div className='container'>
            <div className="form-group">
                <button onClick={() => {
                    // props.history.push('/about')
                    props.history.replace('/home')
                }} >login</button>
            </div>

        </div>
    )
}
