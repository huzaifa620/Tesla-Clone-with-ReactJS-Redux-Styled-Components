import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section title="Model-S" desc="Order Online For Touchless Delivery" img="model-s.jpg" />
        <Section title="Model-Y" desc="Order Online For Touchless Delivery" img="model-y.jpg" />
        <Section title="Model-X" desc="Order Online For Touchless Delivery" img="model-x.jpg" />
        <Section title="Model-3" desc="Order Online For Touchless Delivery" img="model-3.jpg" />
        <Section title="Lowest Cost Solar Panels in America" desc="Money-back guarantee" img="solar-panel.jpg" />
        <Section title="Solar For New Roofs" desc="Solar Roof Costs Less Than a New Rent" img="solar-roof.jpg" />
        <Section title="Accesories" desc="" img="accessories.jpg" />

    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh
`