package com.interviewer;

import com.interviewer.Menu;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.io.PrintStream;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class MenuTest {
    private final InputStream systemIn = System.in;
    private final PrintStream systemOut = System.out;

    private ByteArrayInputStream testIn;
    private ByteArrayOutputStream testOut;

    @BeforeEach
    public void setUpOutput() {
        testOut = new ByteArrayOutputStream();
        System.setOut(new PrintStream(testOut));
    }

    private void provideInput(String data) {
        testIn = new ByteArrayInputStream(data.getBytes());
        System.setIn(testIn);
    }

    private String getOutput() {
        return testOut.toString();
    }

    @AfterEach
    public void restoreSystemInputOutput() {
        System.setIn(systemIn);
        System.setOut(systemOut);
    }
    @Test
    public void addNewInterviewer() throws Exception {
        final String interviewerName = "Interviewer Name";
        final String interviewerLastName = "Interviewer Lastname";
        final String interviewerEmail = "Interviewer Email";
        final String addNewInterviewerCommand = "1 \n "+ interviewerName + " \n " + interviewerLastName + " \n " + interviewerEmail + " \n 1 \n 4 \n";
        provideInput(addNewInterviewerCommand);

        Menu.main(new String[0]);
        final String output = getOutput();

        assertTrue(output.contains(interviewerName));
        assertTrue(output.contains(interviewerLastName));
        assertTrue(output.contains(interviewerEmail));
    }
    @Test
    public void getInterviewer() throws Exception {
        final String interviewerName = "Interviewer Name";
        final String interviewerLastName = "Interviewer Lastname";
        final String interviewerEmail = "Interviewer Email";
        final String addNewInterviewerandGet = "1 \n "+ interviewerName + " \n " + interviewerLastName + " \n " + interviewerEmail + " \n 1 \n 2 \n"+ interviewerEmail +"\n 3 \n" ;
        provideInput(addNewInterviewerandGet);
        Menu.main(new String[0]);
        final String output = getOutput();
        assertTrue(output.contains(interviewerName));
        assertTrue(output.contains(interviewerLastName));
        assertTrue(output.contains(interviewerEmail));

    }
    @Test
    public void ModifyInterviewer() throws Exception {
        final String interviewerName = "Interviewer Name";
        final String interviewerLastName = "Interviewer Lastname";
        final String interviewerEmail = "Interviewer Email";
        final String addNewInterviewerandGet = "1 \n "+ interviewerName + " \n " + interviewerLastName + " \n " + interviewerEmail + " \n 1 \n 3 \n "+ interviewerEmail+ " \n ";
        final String interviewerName1 = "Test Name";
        final String interviewerLastName1 = "Test Lastname";
        final String interviewerEmail1 = "Test Email";
        final String modifyInterviewer =  interviewerName1 + " \n " + interviewerLastName1 + " \n " + interviewerEmail1 + " \n 1 \n " ;
        final String getInterviewer =  "2 \n " + interviewerEmail1 + " \n 4 \n " ;
        final String c = addNewInterviewerandGet + modifyInterviewer + getInterviewer;
        provideInput(c);
        Menu.main(new String[0]);
        final String output = getOutput();
        assertTrue(output.contains(interviewerName1));
        assertTrue(output.contains(interviewerLastName1));
        assertTrue(output.contains(interviewerEmail1));

    }

    @Test
    public void DeleteInterviewer() throws Exception {
        final String interviewerName = "Interviewer Name1";
        final String interviewerLastName = "Interviewer Lastname1";
        final String interviewerEmail = "Interviewer Email1";
        final String addNewInterviewerandGet = "1 \n "+ interviewerName + " \n " + interviewerLastName + " \n " + interviewerEmail + " \n 1 \n 4 \n "+ interviewerEmail+ " \n 1 \n ";
        final String getInterviewer =  "2 \n " + interviewerEmail + " \n 5 \n " ;
        final String c = addNewInterviewerandGet  + getInterviewer;
        provideInput(c);
        Menu.main(new String[0]);
        final String output = getOutput();
        assertTrue(output.contains("Entrevistador no encontrado"));

    }
}


