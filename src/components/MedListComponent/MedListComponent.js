import React, { Component } from 'react'
import DatePickerComponent from '../DatePickerComponent/DatePickerComponent'
import ListComponent from '../ListComponent/ListComponent'

export default class MedListComponent extends Component {
  render() {
    return (
        <>
            <div className='flex justify-center bg-lightPurple text-primaryColor'>
                <h2>MEDICAL TRACKS</h2>
            </div>

            <div>
                <DatePickerComponent/> 
                <ListComponent/>
            </div>

        </>

    )
  }
}
