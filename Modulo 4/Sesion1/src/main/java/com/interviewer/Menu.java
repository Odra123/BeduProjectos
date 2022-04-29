package com.interviewer;

import java.util.ArrayList;
import java.util.Scanner;

public class Menu {
    Scanner sc;

    public Menu() throws Exception {
        sc = new Scanner(System.in);
        Interviewer.data = new ArrayList<Interviewer>();
        Interviewer.loadDataFromFile();
        showMainMenu();
    }

    public void showMainMenu() throws Exception {
        int option = 0;

        while (option != 5) {
            System.out.println("Seleccione la operacion a realizar:");
            System.out.println("1. Dar de alta un entrevistador");
            System.out.println("2. Consultar un entrevistador");
            System.out.println("3. Modificar un entrevistador");
            System.out.println("4. Eliminar un entrevistador");
            System.out.println("5. Salir");

            option = sc.nextInt();
            sc.nextLine();

            switch (option) {
                case 1:
                    addInterviewer();
                    break;
                case 2:
                    searchInterviewer();
                    break;
                case 3:
                    modifyInterviewer();
                    break;
                case 4:
                    deleteInterviewer();
                    break;
            }
        }
        ;

        System.out.println("Programa terminado");
    }

    public void addInterviewer() {
        System.out.println("Ingrese el nombre del entrevistador: ");
        String name = sc.nextLine();
        System.out.println("Ingrese el apellido del entrevistador: ");
        String lastName = sc.nextLine();
        System.out.println("Ingrese el email del entrevistador: ");
        String email = sc.nextLine();
        System.out.println("El entrevistador se encuentra activo? (1=Si/2=No)");
        Boolean isActive = sc.nextInt() == 1;
        sc.nextLine();

        Interviewer interviewer = new Interviewer(name, lastName, email, isActive);
        interviewer.add();

        System.out.println(interviewer.toString());
    }

    public void searchInterviewer() {
        System.out.println("Ingrese el email del entrevistador a consultar:");
        String email = sc.nextLine();

        Interviewer interviewer = Interviewer.getByEmail(email);

        if (interviewer != null) {
            System.out.println("Entrevistador encontrado:");
            System.out.println(interviewer.toString());
        } else {
            System.out.println("Entrevistador no encontrado");
        }
    }
    public void modifyInterviewer(){
        System.out.println("Ingrese el email del entrevistador a modificar:");
        String email = sc.nextLine();

        Interviewer interviewer = Interviewer.getByEmail(email);

        if (interviewer != null) {
            System.out.println("Entrevistador encontrado :");
            System.out.println(interviewer.toString());
            //  System.out.println("Valores a modificar");
            System.out.println("Ingrese el nombre del entrevistador (Enter para no modificar): ");
            String name = sc.nextLine();
            System.out.println("Ingrese el apellido del entrevistador (Enter para no modificar): ");
            String lastName = sc.nextLine();
            System.out.println("Ingrese el email del entrevistador (Enter para no modificar): ");
            String email1 = sc.nextLine();
            System.out.println("El entrevistador se encuentra activo? (1=Si/2=No) (Enter para no modificar)");
            Boolean isActive = sc.nextInt() == 1;
            sc.nextLine();

            interviewer.save(name, lastName, email1, isActive);


        } else {
            System.out.println("Entrevistador no encontrado");
        }
    }
    public void deleteInterviewer() throws Exception {
        System.out.println("Ingrese el email del entrevistador a eliminar:");
        String email = sc.nextLine();
        Interviewer interviewer = Interviewer.getByEmail(email);
        if (interviewer != null){
            System.out.println("Entrevistador encontrado :");
            System.out.println(interviewer.toString());
            System.out.println("¿Esta seguro que desea eliminar?(1=Si/2=No)");
            String res = sc.nextLine();
            if(res.contains("1")){
                interviewer.delete();
                System.out.println("Entrevistador eliminado");
            }

        }
        else {
            System.out.println("Entrevistador no encontrado");
        }
    }


    public static void main(String[] args) throws Exception {
        new Menu();
    }
}