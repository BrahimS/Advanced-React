import App, { Container } from 'next/app'
import PageLayout from '../components/PageLayout'

class MyApp extends App {
  render() {
    const { Component } = this.props
    return (
      <Container>
        <h1>I am here all the time</h1>
       <PageLayout>
          <Component />
        </PageLayout> 
      </Container>
    )
  }
}

export default MyApp