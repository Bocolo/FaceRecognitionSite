import React from 'react';

const Rank = ({ name, entries }) => {
/*class Rank extends React.Component() {
    constructor(props) {
        super();
        this.state = {
            name: '',
            entries:''
        }
    }
    render() {*/
        return (
            <div>
                <div className='black f3'>
                    {`${name}, your current entry count is...`}


                </div>
                <div className='black f3'>
                    {entries}


                </div>

            </div>
        );
  /*  }*/
}
export default Rank;