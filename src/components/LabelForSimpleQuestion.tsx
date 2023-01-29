import { Text } from 'react-native';
import React, { FC } from 'react';
import { globalStyles } from '../../globalStyles';
import { changeInputColor } from '../utils';

export type LabelForSimpleQuestionProps = {
  question: string
  reponse: string
  reponseObligatoire: boolean
}

const LabelForSimpleQuestion: FC<LabelForSimpleQuestionProps> = ({question, reponse, reponseObligatoire}: LabelForSimpleQuestionProps) => {
  return (
    <Text style={[globalStyles.label, {color: `${changeInputColor(reponseObligatoire, reponse)}`}]}>
      &#8227; {question} :
    </Text>
  );
};

export default LabelForSimpleQuestion;