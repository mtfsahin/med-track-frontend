import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MedListComponent from '../components/MedListComponent/MedListComponent'

export default class Home extends Component {
  render() {
    return (
      <>
        <Header/>
        <MedListComponent/>
        <Footer/>
      </>
    )
  }
}
