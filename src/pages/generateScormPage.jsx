import React, { useState } from "react";
import * as scormHelper from '../utils/scormHelper';

const GenerateScormPage = () => {
    const [questionList, setQuestionList] = useState([{ question: '', answers: [{ answer: '', isValid: false }] }]);

    const addNewQuestion = () => {
        questionList.push({ question: '', answers: [{ answer: '', isValid: false }] });
        setQuestionList(questionList);
    }

    const generateScorm = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(questionList));
        const jsonScorm = scormHelper.generateScormJson(questionList);
        console.log('GENERATED JSON\n');
        console.log(JSON.stringify(jsonScorm));
    }

    return <div className="d-flex flex-column">
        <p className="w-100">
            Generate SCORM
        </p>
        <p>
            Кол-во вопросов: {questionList.length}
        </p>
        <div className="d-flex flex-column">
            <form className='d-flex flex-column' onSubmit={(e) => generateScorm(e)}>
                {
                    questionList.map((questionItem, questionIndex) => {
                        return <React.Fragment key={questionIndex}>
                            <div className="d-flex flex-column">
                                <div className='d-flex flex-row'>
                                    <h1>Вопрос №{questionIndex + 1}</h1>
                                </div>
                                <input type="text" placeholder={`Вопрос ${questionIndex + 1}`} onChange={(e) => {
                                    let newCollection = [...questionList];
                                    newCollection[questionIndex].question = e.target.value;
                                    setQuestionList(newCollection);
                                }} />
                            </div>
                            <p className='mt-2 mb-1'>
                                Ответы
                            </p>
                            {
                                questionItem.answers.map((answerItem, answerIndex) => {
                                    return <React.Fragment key={answerIndex}>
                                        <input type="text" placeholder={`Ответ ${answerIndex + 1}`} onChange={(e) => {
                                            let newCollection = [...questionList];
                                            newCollection[questionIndex].answers[answerIndex].answer = e.target.value;
                                            setQuestionList(newCollection);
                                        }} />
                                        <label>
                                            <input
                                                type="checkbox"
                                                onChange={(e) => {
                                                    let newCollection = [...questionList];
                                                    newCollection[questionIndex].answers[answerIndex].isValid = e.target.checked;
                                                    setQuestionList(newCollection);
                                                }}
                                                // name={key}
                                                checked={answerItem.isValid}
                                            />
                                            {`${(answerItem.isValid) ? 'Правильный' : 'Неправильный'}`}
                                        </label>
                                    </React.Fragment>
                                })
                            }
                            <button className='btn btn-primary' type="button" onClick={() => {
                                let newCollection = [...questionList];
                                newCollection[questionIndex].answers.push({ answer: '', isValid: false });
                                setQuestionList(newCollection);
                            }}>
                                Добавить ответ
                            </button>
                            <hr />
                        </React.Fragment>
                    })
                }
                <div className='d-flex flex-row mx-auto'>
                    <button type='submit' className="btn btn-success">
                        Сгенерировать SCORM пакет
                    </button>
                    <button type='button' className="btn btn-primary mx-2" onClick={e => {
                        let newCollection = [...questionList];
                        newCollection.push({ question: '', answers: [{ answer: '123', isValid: false }] })
                        setQuestionList(newCollection);
                    }}>
                        Добавить новый вопрос
                    </button>
                    <button className='btn btn-danger' onClick={(e) => {
                        let newCollection = [...questionList];
                        newCollection.pop();
                        setQuestionList(newCollection);
                    }}>
                        Удалить последний вопрос
                    </button>
                </div>
            </form>
        </div>
    </div>
}

export default GenerateScormPage;