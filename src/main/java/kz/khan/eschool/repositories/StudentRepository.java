package kz.khan.eschool.repositories;

import kz.khan.eschool.models.Student;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface StudentRepository {

    @Select("SELECT * FROM students")
    public List<Student> findAll();

    @Select("SELECT * FROM students WHERE id = #{id}")
    public Student findById(Long Id);

    @Delete("DELETE FROM students WHERE id = #{id}")
    public int deleteById(Long Id);

    @Insert("INSERT INTO students (firstName, lastName, email, password) " +
            "VALUES(#{firstName}, #{lastName}, #{email}, #{password})")
    public int insert(Student student);
}
