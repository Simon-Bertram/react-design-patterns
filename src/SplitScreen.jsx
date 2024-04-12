const Container = ({ children }) => {
  return <div className="flex container mx-auto px-4">{children}</div>
}

const Pane = ({ children }) => {
  return <div className="flex-1">{children}</div>
}

const SplitScreen = ({ left: Left, right: Right }) => {
  return (
    <Container>
      <Pane>
        <Left />
      </Pane>
      <Pane>
        <Right />
      </Pane>
    </Container>
  )
}

export default SplitScreen
