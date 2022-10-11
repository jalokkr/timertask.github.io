import React from 'react'
import { useSelector } from 'react-redux'

function ShowListOfTask() {
  let listOfTask = useSelector((state) => state.listOfTask);
  return (
    <>
      <div className="container w-50 bg-light p-3">
        <h1 className='text-center'>List of Task</h1>
        <table class="table text-center">
          <thead class="thead-light">
            <tr>
              <th scope="col">S. No.</th>
              <th scope="col">Name of Task</th>
              <th scope="col">Task Duration</th>
            </tr>
          </thead>
          <tbody>
            {listOfTask.map(({taskTitle, time}, ind) => {
              return (
                <>
                  <tr>
                    <th scope="row">{ind + 1}.</th>
                    <td>{taskTitle}</td>
                    <td>{time}</td>
                  </tr>
                </>
              )
            })}
          </tbody>
        </table>

      </div>
    </>
  )
}

export default ShowListOfTask