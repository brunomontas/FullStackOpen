const Header = ({ name }) => <h1>{name}</h1>

const Total = ({ sum }) => <b>Number of exercises {sum}</b>

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Content = ({ parts }) => <>{parts.map(part => <Part key={part.id} part={part} />)}</>


const Course =({course}) => {
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total sum={course.parts.reduce((sum, part) => sum + part.exercises,0)} />
    </>
  )
}

export default Course