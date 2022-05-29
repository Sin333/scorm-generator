import { ErrorMessage, Field, Form, Formik, FieldArray } from 'formik';
import React, { useState } from "react";
import * as Yup from 'yup';

const GenerateScormPage = () => {
    const [questionList, setQuestionList] = useState([{ question: '', answers: [{ answer: '123', isValid: false }] }]);

    const addNewQuestion = () => {
        questionList.push({ question: '', answers: [{ answer: '', isValid: false }] });
        setQuestionList(questionList);
    }

    const generateScorm = (values) => {
        debugger;
        console.log(JSON.stringify(values));
    }

    return <div className="d-flex flex-column">
        <p className="w-100">
            Generate SCORM
        </p>
        <div className="d-flex flex-column">
            {questionList.map((x, index) => {
                const currentQuestionNumber = index + 1;
                return <Formik
                    key={index}
                    initialValues={x}
                    enableReinitialize
                    // validationSchema={Yup.object().shape({
                    //     question: Yup.string().required('Поле обязательно для заполнения'),
                    // })}
                    onSubmit={(values, event) => {
                        debugger;
                        generateScorm(values);
                    }}>
                    {({ values }) => (
                        <Form className="d-flex flex-column text-center mx-auto" style={{ width: '300px' }}>
                            <hr />
                            <h1>Вопрос №{currentQuestionNumber}</h1>
                            <div className="d-flex flex-column">
                                <Field className="mt-2" name="question" type="text" placeholder="Вопрос" />
                                <ErrorMessage name="question" component="span" className="text-danger" />
                            </div>
                            <FieldArray
                                name="answers"
                                render={arrayHelpers => (
                                    <div>
                                        {
                                            arrayHelpers.form.values.answers.map((answerItem, index) => (
                                                <div key={index}>
                                                    {/** both these conventions do the same */}
                                                    <Field name={`arrayHelpers[${index}].answer`} />
                                                    <label>
                                                        <Field type="checkbox" name={`answers[${index}].isValid`} onChange={(e) => {
                                                            const currentValue = answerItem.isValid;
                                                            const newValue = currentValue ? false : true;
                                                            arrayHelpers.form.setFieldValue(`answers[${index}].isValid`, newValue);
                                                        }} />
                                                        {`${(answerItem.isValid)}`}
                                                    </label>
                                                </div>
                                            ))
                                        }
                                        <button
                                            type="button"
                                            onClick={() => arrayHelpers.push({ answer: '', isValid: false })}>
                                            +
                                        </button>
                                    </div>
                                )}
                            />
                            <button type="submit" className="btn btn-primary mt-2">
                                Сгенерировать SCORM пакет
                            </button>
                            <hr />
                        </Form>
                    )}
                </Formik>;
            })}
            <div className="d-flex flex-row mt-2 mx-auto">
                <button className="btn btn-primary me-2" onClick={e => addNewQuestion()}>
                    Добавить новый вопрос
                </button>
                <button className="btn btn-primary" onClick={e => generateScorm()}>
                    Сгенерировать SCORM пакет
                </button>
            </div>
        </div>
    </div>;
}

export default GenerateScormPage;