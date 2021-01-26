import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p className='f3 black'>
                {'This Magic Brain will detect faces in your images. Give it a try'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 '>
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange }/>
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-mid-gray'
                        onClick={onButtonSubmit}
                    >Detect </button>

                </div>
            </div>
        </div>
    );
}
export default ImageLinkForm;