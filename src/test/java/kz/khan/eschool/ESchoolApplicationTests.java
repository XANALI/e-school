package kz.khan.eschool;


import kz.khan.eschool.models.Student;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests;
import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

@ContextConfiguration(locations = {"classpath:spring-test-config.xml"})
class ESchoolApplicationTests extends AbstractTestNGSpringContextTests {
    @Autowired
    public Student student;

    @Autowired
    BeanFactory beanFactory;

    @BeforeMethod
    public void announceClass() throws Throwable {
        System.out.println("Inside of MyProjectTest!");
    }

    @Test
    void verifyBeanFactory(){
        System.out.println("verifyBeanFactory: Is bean factory not null? " + (beanFactory!= null));
        Assert.assertNotNull(beanFactory);
    }

    @Test
    void verifyStudentEmail() {
        System.out.println("verifyStudentEmail: Is student not null? " + (student != null));
        Assert.assertNotNull(student);
        System.out.println("verifyStudentEmail: Student email is '" + student.getEmail() + "'");
        Assert.assertEquals(student.getEmail(), "email@email.com");
    }
}
