import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import posed, { PoseGroup } from 'react-pose';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import MaskedInput from 'react-text-mask';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ReCaptcha from '../../util/ReCapatcha';
import Success from './Success';

import { Button, TitleOne } from '../../simple';

const TextMaskCustom = (props) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={['+', 9, 9, 8, ' ', '(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
      placeholderChar={'\u2000'}
    />
  );
};

const useStyles = makeStyles(() => ({
  textField: {
    width: '100%',
  },
  smallTextField: {
    width: '47%',
  },
}));

const CssTextField = withStyles({
  root: {
    '& label.MuiFormLabel-root': {
      color: '#7A7A84',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: '#7A7A84',
    },
    '& .MuiInputBase-input': {
      color: '#fff',
      fontSize: '18px',
    },
    '& label.Mui-focused': {
      color: '#FFB15B',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#FFB15B',
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottomColor: '#FFB15B',
    },
  },
})(TextField);

const OrangeCheckbox = withStyles({
  root: {
    color: '#FFF',
    '&$checked': {
      color: '#FFB15B',
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

const RequestFormPose = posed.div({
  enter: {
    transform: 'translateX(0%)',
    transition: {
      duration: 400,
    },
  },
  exit: {
    transform: 'translateX(100%)',
    transition: {
      duration: 300,
      delay: 100,
    },
  },
});

/**
 *
 * @constructor
 */


const RequestFormRender = ({
  isVisible,
  sendMail,
  sendMailState,
  sendMailErrors = [],
  resetStatusOfSendMail,
  loading,
  projectTypes,
  projectBudgets,
  budgetsLoading,
}) => {
  const [state, setState] = React.useState({
    project: [],
    budget: [],
    comment: '',
    name: '',
    phone: '',
    company: '',
    email: '',
    description: '',
  });
  const [open, setOpen] = React.useState(false);

  const [token, setToken] = useState(undefined);

  useEffect(() => {
    setState({
      ...state,
      project: projectTypes,
      budget: projectBudgets,
    });
  }, []);

  useEffect(() => {
    setOpen(sendMailState === 'failure');

    if (isVisible) {
      document.querySelector('body')
        .classList
        .add('noScroll');
    } return () => {
      document.querySelector('body')
        .classList
        .remove('noScroll');
    };
  });

  const classes = useStyles();

  const handleChange = name => (event) => {

    const { type, dataset, value } = event.target;
    if (type === 'checkbox') {
      setState({
        ...state,
        [dataset.group]: state[dataset.group].map(projectType => (
          String(projectType.id) === value
            ? { ...projectType, checked: event.target.checked }
            : projectType
        )),
      });
      return;
    }
    setState({ ...state, [name]: value });
  };

  // const handleClick = async (e, execute) => {
  //   e.preventDefault();
  // };

  const handleSubmit = execute => async (event) => {
    event.preventDefault();
    const generatedToken = await execute();
    await sendMail({ ...state, captchaToken: generatedToken });
  };

  function handleClose() {
    setOpen(false);
    resetStatusOfSendMail();
  }

  return sendMailState !== 'success'
    ? (
      <>
        <Container className="request-form-container">
          <Row className="request-form-row">
            <Col xl={6}>
              <TitleOne
                text="Оставь заявку"
                style={{ color: '#fff' }}
              />
              <p className="request-form-text">
                Получи примерную стоимость продукта или идеи, которую
                ты хочешь создать. Ты можешь позвонить нам или оставить
                заявку онлайн.
              </p>
            </Col>
          </Row>
          <Row className="request-form-row">
            <Col xl={12}>
              <ReCaptcha action="test">
                {({ isReady, execute }) => (
                  <form onSubmit={handleSubmit(execute)}>
                    <Container>
                      <Row>
                        <Col xl={6}>
                          <h4 className="request-form-title">Что ты хочешь разработать?</h4>
                          <FormGroup row>
                            {
                              loading === 'request'
                                ? <CircularProgress />
                                : projectTypes.map(type => (
                                    <FormControlLabel
                                      key={type.id}
                                      control={
                                        <OrangeCheckbox
                                          onChange={handleChange(type.id)}
                                          value={type.id}
                                          inputProps={{ 'data-group': 'project' }}
                                        />
                                      }
                                      label={type.name}
                                    />
                                ))
                            }
                          </FormGroup>
                          <h4 className="request-form-title" style={{ marginTop: 58 }}>Каковы цели, требования и функциональные возможности этого продукта?</h4>
                          <CssTextField
                            id="request-comment"
                            label="Описание проекта"
                            multiline
                            rowsMax="4"
                            value={state.description}
                            onChange={handleChange('description')}
                            margin="normal"
                            className={classes.textField}
                          />
                        </Col>
                        <Col xl={6}>
                          <div className="request-form-right">
                            <h4 className="request-form-title">Контактные данные</h4>
                            <div className="request-form-inputs">
                              <CssTextField
                                id="request-comment"
                                label="имя*"
                                value={state.name}
                                onChange={handleChange('name')}
                                margin="normal"
                                className={classes.smallTextField}
                                required={true}
                              />
                              <CssTextField
                                id="request-comment"
                                label="номер телефона*"
                                value={state.phone}
                                onChange={handleChange('phone')}
                                margin="normal"
                                className={classes.smallTextField}
                                InputProps={{
                                  inputComponent: TextMaskCustom,
                                }}
                                required={true}
                              />
                            </div>
                            <div className="request-form-inputs">
                              <CssTextField
                                id="request-comment"
                                label="название компании"
                                value={state.company}
                                onChange={handleChange('company')}
                                margin="normal"
                                className={classes.smallTextField}
                              />
                              <CssTextField
                                id="request-comment"
                                label="email*"
                                value={state.email}
                                onChange={handleChange('email')}
                                margin="normal"
                                required={true}
                                className={classes.smallTextField}
                              />
                            </div>
                            <CssTextField
                              id="request-comment"
                              label="комментарий к заявке"
                              multiline
                              rowsMax="4"
                              value={state.comment}
                              onChange={handleChange('comment')}
                              margin="normal"
                              className={classes.textField}
                              style={{ marginTop: 'auto' }}
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col xl={6}>
                          <h4 className="request-form-title">Ориентировочный бюджет (сум)</h4>
                          <FormGroup row>
                            {
                              budgetsLoading === 'request'
                                ? <CircularProgress />
                                : projectBudgets.map(budget => (
                                    <FormControlLabel
                                      key={budget.id}
                                      control={
                                        <OrangeCheckbox
                                          onChange={handleChange(budget.id)}
                                          value={budget.id}
                                          inputProps={{ 'data-group': 'budget' }}
                                        />
                                      }
                                      label={budget.name}
                                    />
                                ))
                            }
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row style={{ marginTop: 45 }}>
                        <Col xl={6}>
                          <React.Fragment>
                            <Button
                              text="Отправить заявку"
                              htmlType="submit"
                              loading={sendMailState === 'request'}
                              disabled={!isReady}
                            />
                          </React.Fragment>
                        </Col>
                      </Row>
                    </Container>
                  </form>
                )}
              </ReCaptcha>
            </Col>
          </Row>
        </Container>
        <Dialog
          open={open}
          onClose={handleClose}
        >
          <DialogTitle id="alert-dialog-title">
            <FontAwesomeIcon icon={['far', 'times-circle']} style={{ color: 'red', marginRight: 15 }} />
            Ошибка
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {sendMailErrors.map((error, idx) => (
                <span key={idx} className="request-form-errors">{error.msg}</span>
              ))}
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </>
    ) : (
      <Container className="request-form-container request-form-success">
        <Success
          resetStatusOfSendMail={resetStatusOfSendMail}
        />
      </Container>
    );
};

const RequestForm = ({
  isVisible = false,
  ...restProps
}) => (
  <PoseGroup>
    { isVisible ? (
      <RequestFormPose key="request-key" className="request-form">
        <RequestFormRender
          isVisible={isVisible}
          {...restProps}
        />
      </RequestFormPose>
    ) : null
    }
  </PoseGroup>
);

export default RequestForm;
