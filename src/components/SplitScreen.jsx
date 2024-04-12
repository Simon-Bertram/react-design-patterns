const Container = ({ children }) => {
  return <div className="flex container mx-auto px-4">{children}</div>
}

const Pane = ({ children }) => {
  return <div className={`${(props) => props.weight}`}>{children}</div>
}

const SplitScreen = ({
  left: Left,
  right: Right,
  leftWeight = 1,
  rightWeight = 1,
}) => {
  return (
    <Container>
      <Pane weight={leftWeight}>
        <Left />
      </Pane>
      <Pane weight={rightWeight}>
        <Right />
      </Pane>
    </Container>
  )
}

export default SplitScreen
