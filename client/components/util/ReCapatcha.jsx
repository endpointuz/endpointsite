import React from 'react';

class ReCaptcha extends React.Component {
  state = {
    isReady: false,
  }

  componentDidMount() {
    this.loadCaptcha();
  }

  componentWillUnmount() {
    this.unloadCaptcha();
  }

  loadCaptcha = () => {
    window.captchaOnLoad = () => {
      this.renderCaptcha();

      window.grecaptcha.ready(() => {
        this.setState({ isReady: true });
      });
    };

    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js?onload=captchaOnLoad&render=explicit';
    script.async = true;
    script.defer = true;
    this.script = document.body.appendChild(script);
  }

  renderCaptcha = () => {
    const div = document.createElement('div');
    div.id = 'g-recaptcha';
    this.div = document.body.appendChild(div);

    window.grecaptcha.render('g-recaptcha', {
      sitekey: '6Leaz6kUAAAAAAlzgM6bb4ldSHBUXmW0SoSUFZEJ',
      size: 'invisible',
    });
  }

  executeCaptcha = () => {
    if (!this.state.isReady) {
      throw new Error('Captcha must be ready before it can be executed.');
    }

    const { action } = this.props;
    return window.grecaptcha.execute({ action });
  }

  unloadCaptcha = () => {
    document.body.removeChild(this.div);
    document.body.removeChild(this.script);
  }

  render() {
    return this.props.children({
      isReady: this.state.isReady,
      execute: this.executeCaptcha,
    });
  }
}

export default ReCaptcha;
