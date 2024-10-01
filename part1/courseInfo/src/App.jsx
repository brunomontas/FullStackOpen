const Header = ({ course }) => <div><h1>{course}</h1></div>

const Total = ({ sum }) => <div><p>Number of exercises {sum}</p></div>

const Part = ({ part }) =>  <p>{part.name} {part.exercises}</p>

const Content = ({ parts }) => 
    <>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
    </>

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total sum={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  );
};

export default App;
