import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import PickerButton from '../components/PickerButton';
import Button from '../components/Button';
import PickerButtonList from '../components/PickerButtonList';

storiesOf('Button', module)
  .add('default', () => (
    <Button onClick={action('clicked')}>Ginger</Button>
  ));

storiesOf('PickerButton', module)
  .add('default', () => (
    <PickerButton
      onClick={action('clicked')} 
      imageSource="https://placeimg.com/480/480/any"
      text="Ginger"
    />
  ));

storiesOf('PickerButtonList', module)
  .add('default', () => (
    <PickerButtonList>
      <PickerButton 
        onClick={action('clicked')} 
        imageSource="https://placeimg.com/480/480/any"
        text="Ginger"
      />
      <PickerButton 
        onClick={action('clicked')} 
        imageSource="https://placeimg.com/480/480/any"
        text="Ginger"
      />
      <PickerButton 
        onClick={action('clicked')} 
        imageSource="https://placeimg.com/480/480/any"
        text="Ginger"
      />
      <PickerButton 
        onClick={action('clicked')} 
        imageSource="https://placeimg.com/480/480/any"
        text="Ginger"
      />
      <PickerButton 
        onClick={action('clicked')} 
        imageSource="https://placeimg.com/480/480/any"
        text="Ginger"
      />
      <PickerButton 
        onClick={action('clicked')} 
        imageSource="https://placeimg.com/480/480/any"
        text="Ginger"
      />
      <PickerButton 
        onClick={action('clicked')} 
        imageSource="https://placeimg.com/480/480/any"
        text="Ginger"
      />
      <PickerButton 
        onClick={action('clicked')} 
        imageSource="https://placeimg.com/480/480/any"
        text="Ginger"
      />
    </PickerButtonList>
    
  ));