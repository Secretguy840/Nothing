<?php 
class Student {
    // Private cLass variables
    private $name;
    private $age;
    private $grade;

    public function __construct($name, $age, $grade) {
        $this->name = $name;
        $this->age = $age;
        $this->grade = $grade;
    }

    public function getStudentInfo() {
        return "Name: " . $this->name . ", Age: " . $this->age . ", Grade: " . $this->grade;
    }
}

$student = new Student("SSP John Wick", 17, "11th");
echo $student->getStudentInfo() . "\n";

?>