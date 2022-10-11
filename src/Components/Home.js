import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../ReduxStore/TaskSlice'

function Home() {
    const Dispatch = useDispatch();
    let [start, setStart] = useState(false);
    let [pause, setPause] = useState(false);
    let [timeStamp, setTimeStamp] = useState('');
    let [second, setSecond] = useState(0);
    let [minute, setMinute] = useState(0);
    let [hour, setHour] = useState(0);
    let [title, setTitle] = useState('');
    let [desc, setDesc] = useState('');

    useEffect(() => {
        let interval = null;
        if (start && pause === false) {
            interval = setInterval(() => {
                setSecond((second) => second + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        };
    }, [start, pause]);

    function onStart() {
        setStart(true);
        setPause(false);
    }

    function onPause() {
        setStart(false);
        setPause(true);
    }

    function onSave() {
        setStart(false);
        setPause(true);
        setTimeStamp(`${hour}:${minute}:${second}`);
    }

    function formSubmit(e) {
        e.preventDefault();
        Dispatch(addTask({ taskTitle: title, taskDescription: desc, time: timeStamp }));
        setTitle('');
        setDesc('');
        setSecond(0);
        setMinute(0);
        setHour(0);
        setTimeStamp('');
    }

    if (60 <= second) {
        setSecond(0);
        setMinute(minute + 1);
    }

    if (60 <= minute) {
        setMinute(0);
        setHour(hour + 1);
    }

    return (
        <>
            <div className="container m-50 text-center bg-light d-flex justify-content-center align-items-center flex-column" style={{ height: '88vh' }}>
                <h1 style={{ fontSize: '80px' }}>
                    {`${hour}:${minute}:${second}`}
                </h1>
                <div>
                    <button disabled={start} className='btn btn-primary m-2' style={{ width: '150px' }} onClick={() => onStart()}>Start</button>
                    <button disabled={pause} className='btn btn-danger m-2' style={{ width: '150px' }} onClick={() => onPause()}>Pause</button>
                    <button className='btn btn-success m-2' style={{ width: '150px' }} onClick={() => onSave()} type='button' data-toggle="modal" data-target="#staticBackdrop">Save</button>
                </div>
                <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                
                            </div>
                            <div className="modal-body">
                                {/* {hour}:{minute}:{second} */}
                                {timeStamp}
                                <form onSubmit={formSubmit}>
                                    <div className='text-left'>
                                        <div className="form-group">
                                            <label htmlFor="taskTitle">Title: </label>
                                            <input type="text" className="form-control" id="taskTitle" value={title} onChange={(e) => setTitle(e.target.value)} aria-describedby="emailHelp" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="taskDesc">Description: </label>
                                            <textarea name="" className="form-control" id="taskDesc" cols="30" rows="3" value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-primary w-100">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home