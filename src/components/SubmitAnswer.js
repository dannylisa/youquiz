import React, { useState } from 'react';
import {Paper, Grid, Button, FormControl, Input, InputLabel, FormHelperText} from '@material-ui/core';
import { dbService } from '../fbase';

const SubmitAnswer = ({no, user, doc_user_id}) => {
    const {uid, name, tel} = user;
    const [answer, setAnswer] = useState('');
    const onInputChange = event => {
        const {target:{value}} = event;
        setAnswer(value)
    }
    const onSubmitClicked = async () => {
        if(answer==''){
            alert('정답을 입력해주세요.');
            return;
        }
        const answerObj = {
            uid,
            name,
            tel,
            answer
        }
        await dbService.collection('quiz_'+no).add(answerObj);
        alert('정답이 제출되었습니다.');
        await dbService.collection('userinfo').doc(doc_user_id).update({
            ['quiz_'+no]: true
        })
    }
    return(
        <div id="submitAnswer">
            <Grid container direction="row" spacing={2} alignItems="center">
                <Grid item xs={9}>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="ans-input">정답</InputLabel>
                        <Input id="ans-input" type="text" aria-describedby="ans-helper" name="answer" onChange={onInputChange} value={answer}/>
                    </FormControl>
                </Grid>
                <Grid item xs={3}>
                    <Button onClick={onSubmitClicked} fullWidth variant="contained" color="primary">
                        제출
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default SubmitAnswer;