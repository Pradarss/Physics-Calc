function update() {
    // var n1 = parseFloat(document.getElementById('input1').value);
    // var n2 = parseFloat(document.getElementById('input2').value);
    
    var calc = document.getElementById('calculators').value;
    if (calc === 'Calculator-Choice') {
        document.getElementById('input1').value = '';
        document.getElementById('input2').value = '';
        document.getElementById('input3').value = '';
        document.getElementById('input4').value = '';
        document.getElementById('input5').value = '';

        document.getElementById('input1header').innerText = '';
        document.getElementById('input2header').innerText = '';
        document.getElementById('input3header').innerText = '';
        document.getElementById('input4header').innerText = '';
        document.getElementById('input5header').innerText = '';

        document.getElementById('def').style.display = 'none';
		document.getElementById('input1header').style.display = 'none';
        document.getElementById('input2header').style.display = 'none';
        document.getElementById('input3header').style.display = 'none';
        document.getElementById('input4header').style.display = 'none';
        document.getElementById('input5header').style.display = 'none';

        document.getElementById('input1').type = 'hidden';
        document.getElementById('input2').type = 'hidden';
        document.getElementById('input3').type = 'hidden';
        document.getElementById('input4').type = 'hidden';
        document.getElementById('input5').type = 'hidden';

        document.getElementById('Calculate').hidden = 'hidden';

        document.getElementById('OutputBox').style.display = 'none';
    }
    if(calc === 'Gravitational-Force-Calculator') {
        // document.getElementById('title').innerText = 'Gravitational Force Calculator'
		document.getElementById('input1').value = '';
        document.getElementById('input2').value = '';
        document.getElementById('input3').value = '';
        document.getElementById('input4').value = '';
        document.getElementById('input5').value = '';

        document.getElementById('input1header').innerText = 'Mass 1 (kg)';
        document.getElementById('input2header').innerText = 'Mass 2 (kg)';
        document.getElementById('input3header').innerText = 'Distance (m)';
        document.getElementById('input4header').innerText = '';
        document.getElementById('input5header').innerText = '';

        document.getElementById('def').style.display = '';
        document.getElementById('formula').style.display = '';
		document.getElementById('input1header').style.display = '';
        document.getElementById('input2header').style.display = '';
        document.getElementById('input3header').style.display = '';
        document.getElementById('input4header').style.display = 'none';
        document.getElementById('input5header').style.display = 'none';

        document.getElementById('input1').type = 'text';
        document.getElementById('input2').type = 'text';
        document.getElementById('input3').type = 'text';
        document.getElementById('input4').type = 'hidden';
        document.getElementById('input5').type = 'hidden';

        document.getElementById('Calculate').hidden = "";

        document.getElementById('OutputBox').style.display = '';
        document.getElementById('result').innerText = ''

		document.getElementById('def').innerHTML = 'The gravitational force is that which attracts any two objects with mass. We call this force attractive because it always tries to pull the masses together, but it never pushes them apart. In fact, every object, including we (a human body), is pulling on every other object in this entire universe.';

        document.getElementById('formula').innerHTML = '<img class="XqHOTb IGEbUc" alt="F=G{\frac{m_1m_2}{r^2}}" src="https://www.gstatic.com/education/formulas2/443397389/en/newton_s_law_of_universal_gravitation.svg" role="img" data-atf="1" data-frt="0" style="margin-left: -20px;">';

    }
    if(calc === 'Force-Calculator') {
        // document.getElementById('title').innerText = 'Force Calculater';
        document.getElementById('input1').value = '';
        document.getElementById('input2').value = '';
        document.getElementById('input3').value = '';
        document.getElementById('input4').value = '';
        document.getElementById('input5').value = '';

        document.getElementById('input1header').innerText = 'Mass (kg)';
        document.getElementById('input2header').innerText = 'Acceleration (m/s^2)';
        document.getElementById('input3header').innerText = '';
        document.getElementById('input4header').innerText = '';
        document.getElementById('input5header').innerText = '';
        
        document.getElementById('def').style.display = '';
        document.getElementById('formula').style.display = '';
		document.getElementById('input1header').style.display = '';
        document.getElementById('input2header').style.display = '';
        document.getElementById('input3header').style.display = 'none';
        document.getElementById('input4header').style.display = 'none';
        document.getElementById('input5header').style.display = 'none';

        document.getElementById('input1').type = 'text';
        document.getElementById('input2').type = 'text';
        document.getElementById('input3').type = 'hidden';
        document.getElementById('input4').type = 'hidden';
        document.getElementById('input5').type = 'hidden';

        document.getElementById('Calculate').hidden = "";

        document.getElementById('OutputBox').style.display = '';
        document.getElementById('result').innerText = ''

		document.getElementById('def').innerHTML = 'Force is a push or pull on an object that produces acceleration in the body on which it acts. S.I. unit of force is Newton.';

        document.getElementById('formula').innerHTML = '<img class="XqHOTb IGEbUc" alt="F = m * a" src="https://www.gstatic.com/education/formulas2/443397389/en/newtons_second_law.svg" role="img" data-atf="0" data-frt="0" style="margin-top: -50px">';

    }
    if(calc === 'Acceleration-Calculator') {
        // document.getElementById('title').innerText = 'Force Calculater';
        document.getElementById('input1').value = '';
        document.getElementById('input2').value = '';
        document.getElementById('input3').value = '';
        document.getElementById('input4').value = '';
        document.getElementById('input5').value = '';

        document.getElementById('input1header').innerText = 'Initial Speed (m/s)';
        document.getElementById('input2header').innerText = 'Final Speed (m/s)';
        document.getElementById('input3header').innerText = 'Time (s)';
        document.getElementById('input4header').innerText = '';
        document.getElementById('input5header').innerText = '';
        
		document.getElementById('def').style.display = '';
        document.getElementById('formula').style.display = '';
        document.getElementById('input1header').style.display = '';
        document.getElementById('input2header').style.display = '';
        document.getElementById('input3header').style.display = '';
        document.getElementById('input4header').style.display = 'none';
        document.getElementById('input5header').style.display = 'none';

        document.getElementById('input1').type = 'text';
        document.getElementById('input2').type = 'text';
        document.getElementById('input3').type = 'text';
        document.getElementById('input4').type = 'hidden';
        document.getElementById('input5').type = 'hidden';

        document.getElementById('Calculate').hidden = "";

        document.getElementById('OutputBox').style.display = '';
        document.getElementById('result').innerText = ''

		document.getElementById('def').innerHTML = 'Acceleration is defined as the rate of change of velocity with respect to time. Acceleration is a vector quantity as it has both magnitude and direction.';

        document.getElementById('formula').innerHTML = '<img class="XqHOTb IGEbUc" alt="\overline{a} = \frac{v - v_0}{t} = \frac{\Delta v}{\Delta t}" src="https://www.gstatic.com/education/formulas2/443397389/en/acceleration.svg" role="img" data-atf="0" data-frt="0" style="margin-top: -50px;margin-left: -50px">';
    }
    if(calc === 'Friction-Calculator') {
        // document.getElementById('title').innerText = 'Force Calculater';
        document.getElementById('input1').value = '';
        document.getElementById('input2').value = '';
        document.getElementById('input3').value = '';
        document.getElementById('input4').value = '';
        document.getElementById('input5').value = '';

        document.getElementById('input1header').innerText = 'Friction Coefficient (μ)';
        document.getElementById('input2header').innerText = 'Normal Force (N)';
        document.getElementById('input3header').innerText = '';
        document.getElementById('input4header').innerText = '';
        document.getElementById('input5header').innerText = '';
        
        document.getElementById('def').style.display = '';
        document.getElementById('formula').style.display = '';
		document.getElementById('input1header').style.display = '';
        document.getElementById('input2header').style.display = '';
        document.getElementById('input3header').style.display = 'none';
        document.getElementById('input4header').style.display = 'none';
        document.getElementById('input5header').style.display = 'none';

        document.getElementById('input1').type = 'text';
        document.getElementById('input2').type = 'text';
        document.getElementById('input3').type = 'hidden';
        document.getElementById('input4').type = 'hidden';
        document.getElementById('input5').type = 'hidden';

        document.getElementById('Calculate').hidden = "";

        document.getElementById('OutputBox').style.display = '';
        document.getElementById('result').innerText = ''

		document.getElementById('def').innerHTML = 'Friction is a type of relative force that acts as a resistance between two bodies that are in contact with each other. In other words when two bodies are in contact with each other there exists a force which opposes their relative motion.';

        document.getElementById('formula').innerHTML = '<img class="XqHOTb IGEbUc" alt="f = \mu N" src="https://www.gstatic.com/education/formulas2/443397389/en/friction_force.svg" role="img" data-atf="0" data-frt="0" style="margin-top: -10px;margin-left: 20px">';
    }

	if(calc === 'Kinetic-Energy-Calculator') {
        // document.getElementById('title').innerText = 'Force Calculater';
        document.getElementById('input1').value = '';
        document.getElementById('input2').value = '';
        document.getElementById('input3').value = '';
        document.getElementById('input4').value = '';
        document.getElementById('input5').value = '';

        document.getElementById('input1header').innerText = 'Mass (m)';
        document.getElementById('input2header').innerText = 'Velocity (v)';
        document.getElementById('input3header').innerText = '';
        document.getElementById('input4header').innerText = '';
        document.getElementById('input5header').innerText = '';
        
        document.getElementById('def').style.display = '';
        document.getElementById('formula').style.display = '';
		document.getElementById('input1header').style.display = '';
        document.getElementById('input2header').style.display = '';
        document.getElementById('input3header').style.display = 'none';
        document.getElementById('input4header').style.display = 'none';
        document.getElementById('input5header').style.display = 'none';

        document.getElementById('input1').type = 'text';
        document.getElementById('input2').type = 'text';
        document.getElementById('input3').type = 'hidden';
        document.getElementById('input4').type = 'hidden';
        document.getElementById('input5').type = 'hidden';

        document.getElementById('Calculate').hidden = "";

        document.getElementById('OutputBox').style.display = '';
        document.getElementById('result').innerText = ''

		document.getElementById('def').innerHTML = 'Kinetic energy is the energy associated with the movement of objects. The kinetic energy of an object depends on both its mass and velocity, with its velocity playing a much greater role. When an object is applied net force, that object gains speed and eventually, gains kinetic energy.';

        document.getElementById('formula').innerHTML = '<img class="XqHOTb IGEbUc" alt="f = \mu N" src="https://www.gstatic.com/education/formulas2/443397389/en/friction_force.svg" role="img" data-atf="0" data-frt="0" style="margin-top: -55px;margin-left: 20px">';
    }

	if(calc === 'Torque-Calculator') {
        // document.getElementById('title').innerText = 'Force Calculater';
        document.getElementById('input1').value = '';
        document.getElementById('input2').value = '';
        document.getElementById('input3').value = '';
        document.getElementById('input4').value = '';
        document.getElementById('input5').value = '';

        document.getElementById('input1header').innerText = 'Distance (r)';
        document.getElementById('input2header').innerText = 'Force (f)';
        document.getElementById('input3header').innerText = 'Angle (radians)';
        document.getElementById('input4header').innerText = '';
        document.getElementById('input5header').innerText = '';
        
        document.getElementById('def').style.display = '';
        document.getElementById('formula').style.display = '';
		document.getElementById('input1header').style.display = '';
        document.getElementById('input2header').style.display = '';
        document.getElementById('input3header').style.display = '';
        document.getElementById('input4header').style.display = 'none';
        document.getElementById('input5header').style.display = 'none';

        document.getElementById('input1').type = 'text';
        document.getElementById('input2').type = 'text';
        document.getElementById('input3').type = 'text';
        document.getElementById('input4').type = 'hidden';
        document.getElementById('input5').type = 'hidden';

        document.getElementById('Calculate').hidden = "";

        document.getElementById('OutputBox').style.display = '';
        document.getElementById('result').innerText = ''

		document.getElementById('def').innerHTML = 'A  force that produces or tends to produce rotation or torsion; also : a measure of the effectiveness of such a force that consists of the product of the force and the perpendicular distance from the line of action of the force to the axis of rotation.';

        document.getElementById('formula').innerHTML = '<img class="XqHOTb IGEbUc" alt="\tau = rF\sin\theta" src="https://www.gstatic.com/education/formulas2/443397389/en/torque.svg" role="img" data-atf="0" data-frt="0">';
    }

	if(calc === 'Inertia-Calculator') {
        // document.getElementById('title').innerText = 'Force Calculater';
        document.getElementById('input1').value = '';
        document.getElementById('input2').value = '';
        document.getElementById('input3').value = '';
        document.getElementById('input4').value = '';
        document.getElementById('input5').value = '';

        document.getElementById('input1header').innerText = 'Angular Momentum (l)';
        document.getElementById('input2header').innerText = 'Angular Velocity (w)';
        document.getElementById('input3header').innerText = '';
        document.getElementById('input4header').innerText = '';
        document.getElementById('input5header').innerText = '';
        
        document.getElementById('def').style.display = '';
        document.getElementById('formula').style.display = '';
		document.getElementById('input1header').style.display = '';
        document.getElementById('input2header').style.display = '';
        document.getElementById('input3header').style.display = 'none';
        document.getElementById('input4header').style.display = 'none';
        document.getElementById('input5header').style.display = 'none';

        document.getElementById('input1').type = 'text';
        document.getElementById('input2').type = 'text';
        document.getElementById('input3').type = 'hidden';
        document.getElementById('input4').type = 'hidden';
        document.getElementById('input5').type = 'hidden';

        document.getElementById('Calculate').hidden = "";

        document.getElementById('OutputBox').style.display = '';
        document.getElementById('result').innerText = ''

		document.getElementById('def').innerHTML = 'A  property of matter by which it continues in its existing state of rest or uniform motion in a straight line, unless that state is changed by an external force.';

        document.getElementById('formula').innerHTML = '<img class="XqHOTb IGEbUc" alt="I=\frac{L}{\omega}" src="https://www.gstatic.com/education/formulas2/443397389/en/moment_of_inertia.svg" role="img" data-atf="0" data-frt="0" style="margin-top: -55px;margin-left: 20px">';
    }

	if(calc === 'Density-Calculator') {
        // document.getElementById('title').innerText = 'Force Calculater';
        document.getElementById('input1').value = '';
        document.getElementById('input2').value = '';
        document.getElementById('input3').value = '';
        document.getElementById('input4').value = '';
        document.getElementById('input5').value = '';

        document.getElementById('input1header').innerText = 'Mass (m)';
        document.getElementById('input2header').innerText = 'Volume (v)';
        document.getElementById('input3header').innerText = '';
        document.getElementById('input4header').innerText = '';
        document.getElementById('input5header').innerText = '';
        
        document.getElementById('def').style.display = '';
        document.getElementById('formula').style.display = '';
		document.getElementById('input1header').style.display = '';
        document.getElementById('input2header').style.display = '';
        document.getElementById('input3header').style.display = 'none';
        document.getElementById('input4header').style.display = 'none';
        document.getElementById('input5header').style.display = 'none';

        document.getElementById('input1').type = 'text';
        document.getElementById('input2').type = 'text';
        document.getElementById('input3').type = 'hidden';
        document.getElementById('input4').type = 'hidden';
        document.getElementById('input5').type = 'hidden';

        document.getElementById('Calculate').hidden = "";

        document.getElementById('OutputBox').style.display = '';
        document.getElementById('result').innerText = ''

		document.getElementById('def').innerHTML = 'Density is the measurement of how tightly a material is packed together. It is defined as the mass per unit volume.';

        document.getElementById('formula').innerHTML = '<img class="XqHOTb IGEbUc" alt="\rho ={\frac {m}{V}}" src="https://www.gstatic.com/education/formulas2/443397389/en/density.svg" role="img" data-atf="0" data-frt="0" style="margin-top: -70px;margin-left: 20px">"';
    }

	if(calc === 'Work-Done-Calculator') {
        // document.getElementById('title').innerText = 'Force Calculater';
        document.getElementById('input1').value = '';
        document.getElementById('input2').value = '';
        document.getElementById('input3').value = '';
        document.getElementById('input4').value = '';
        document.getElementById('input5').value = '';

        document.getElementById('input1header').innerText = 'Force (f)';
        document.getElementById('input2header').innerText = 'Displacement (s)';
        document.getElementById('input3header').innerText = '';
        document.getElementById('input4header').innerText = '';
        document.getElementById('input5header').innerText = '';
        
        document.getElementById('def').style.display = '';
        document.getElementById('formula').style.display = '';
		document.getElementById('input1header').style.display = '';
        document.getElementById('input2header').style.display = '';
        document.getElementById('input3header').style.display = 'none';
        document.getElementById('input4header').style.display = 'none';
        document.getElementById('input5header').style.display = 'none';

        document.getElementById('input1').type = 'text';
        document.getElementById('input2').type = 'text';
        document.getElementById('input3').type = 'hidden';
        document.getElementById('input4').type = 'hidden';
        document.getElementById('input5').type = 'hidden';

        document.getElementById('Calculate').hidden = "";

        document.getElementById('OutputBox').style.display = '';
        document.getElementById('result').innerText = ''

		document.getElementById('def').innerHTML = 'It is done only when a constant force applied on an object cause the object to move in the same direction as the force applied.\nWork is the product of force and displacement. In physics, a force is said to do work if, when acting, there is a movement of the point of application in the direction of the force.';

        document.getElementById('formula').innerHTML = '<img class="XqHOTb IGEbUc" alt="W=Fs" src="https://www.gstatic.com/education/formulas2/443397389/en/work.svg" role="img" data-atf="0" data-frt="0" style="margin-top: 15px;margin-left: 15px">';
    }

	if(calc === 'Charge-Calculator') {
        // document.getElementById('title').innerText = 'Force Calculater';
        document.getElementById('input1').value = '';
        document.getElementById('input2').value = '';
        document.getElementById('input3').value = '';
        document.getElementById('input4').value = '';
        document.getElementById('input5').value = '';

        document.getElementById('input1header').innerText = 'Current (i)';
        document.getElementById('input2header').innerText = 'time (t)';
        document.getElementById('input3header').innerText = '';
        document.getElementById('input4header').innerText = '';
        document.getElementById('input5header').innerText = '';
        
        document.getElementById('def').style.display = '';
        document.getElementById('formula').style.display = '';
		document.getElementById('input1header').style.display = '';
        document.getElementById('input2header').style.display = '';
        document.getElementById('input3header').style.display = 'none';
        document.getElementById('input4header').style.display = 'none';
        document.getElementById('input5header').style.display = 'none';

        document.getElementById('input1').type = 'text';
        document.getElementById('input2').type = 'text';
        document.getElementById('input3').type = 'hidden';
        document.getElementById('input4').type = 'hidden';
        document.getElementById('input5').type = 'hidden';

        document.getElementById('Calculate').hidden = "";

        document.getElementById('OutputBox').style.display = '';
        document.getElementById('result').innerText = ''

		document.getElementById('def').innerHTML = 'Electric charge is the basic physical property of matter that causes it to experience a force when kept in an electric or magnetic field. An electric charge is associated with an electric field and the moving electric charge generates a magnetic field.';

        document.getElementById('formula').innerHTML = '<img class="XqHOTb IGEbUc" alt="W=Fs" src="https://www.gstatic.com/education/formulas2/443397389/en/work.svg" role="img" data-atf="0" data-frt="0" style="margin-top: -55px;margin-left: 20px">';
    }

	if(calc === 'Potential-Energy-Calculator') {
        // document.getElementById('title').innerText = 'Force Calculater';
        document.getElementById('input1').value = '';
        document.getElementById('input2').value = '';
        document.getElementById('input3').value = '';
        document.getElementById('input4').value = '';
        document.getElementById('input5').value = '';

        document.getElementById('input1header').innerText = 'Mass (m)';
        document.getElementById('input2header').innerText = 'Height (h)';
        document.getElementById('input3header').innerText = '';
        document.getElementById('input4header').innerText = '';
        document.getElementById('input5header').innerText = '';
        
        document.getElementById('def').style.display = '';
        document.getElementById('formula').style.display = '';
		document.getElementById('input1header').style.display = '';
        document.getElementById('input2header').style.display = '';
        document.getElementById('input3header').style.display = 'none';
        document.getElementById('input4header').style.display = 'none';
        document.getElementById('input5header').style.display = 'none';

        document.getElementById('input1').type = 'text';
        document.getElementById('input2').type = 'text';
        document.getElementById('input3').type = 'hidden';
        document.getElementById('input4').type = 'hidden';
        document.getElementById('input5').type = 'hidden';

        document.getElementById('Calculate').hidden = "";

        document.getElementById('OutputBox').style.display = '';
        document.getElementById('result').innerText = ''

		document.getElementById('def').innerHTML = 'potential energy, stored energy that depends upon the relative position of various parts of a system. A spring has more potential energy when it is compressed or stretched. A steel ball has more potential energy raised above the ground than it has after falling to Earth.';

        document.getElementById('formula').innerHTML = '<<img class="XqHOTb IGEbUc" alt="U=m g h" src="https://www.gstatic.com/education/formulas2/443397389/en/gravitational_energy.svg" role="img" data-atf="0" data-frt="0">';
    }
}

function calc()
{
    var n1 = parseFloat(document.getElementById('input1').value);
    var n2 = parseFloat(document.getElementById('input2').value);
    var n3 = parseFloat(document.getElementById('input3').value);
    var n4 = parseFloat(document.getElementById('input4').value);
    var n5 = parseFloat(document.getElementById('input5').value);
    
    var calc = document.getElementById('calculators').value;
    
    if(calc === 'Gravitational-Force-Calculator')
    {
        document.getElementById('result').style.display  = '';
        document.getElementById('result').innerText = (n1 * n2 * 6.674 * 10 **(-11)) / (n3 ** 2) + ' N';
    }
    
    if(calc === 'Force-Calculator')
    {
        document.getElementById('result').style.display  = '';
        document.getElementById('result').innerText = n1 * n2 + ' N';
    }
    
    if(calc === 'Acceleration-Calculator')
    {
        document.getElementById('result').style.display  = '';
        document.getElementById('result').innerText = (n2 - n1) / n3 + ' m/s²';
    }
    
    if(calc === 'Friction-Calculator')
    {
        document.getElementById('result').style.display  = '';
        document.getElementById('result').innerText = n1 * n2 + ' N';
    }

	if(calc === 'Kinetic-Energy-Calculator')
    {
        document.getElementById('result').style.display  = '';
        document.getElementById('result').innerText = 1.2 * n1 * n2 * n2 + ' J';
    }

	if(calc === 'Torque-Calculator')
    {
        document.getElementById('result').style.display  = '';
        document.getElementById('result').innerText = n1 * n2 * Math.sin(n3) + ' N/m';
    }

	if(calc === 'Inertia-Calculator')
    {
        document.getElementById('result').style.display  = '';
        document.getElementById('result').innerText = n1 / n2 + ' Kg m²';
    }

	if(calc === 'Density-Calculator')
    {
        document.getElementById('result').style.display  = '';
        document.getElementById('result').innerText = n1 / n2 + ' Kg/m³';
    }

	if(calc === 'Work-Done-Calculator')
    {
        document.getElementById('result').style.display  = '';
        document.getElementById('result').innerText = n1 * n2 + ' J';
    }

	if(calc === 'Charge-Calculator')
    {
        document.getElementById('result').style.display  = '';
        document.getElementById('result').innerText = n1 * n2 + ' C';
    }

	if(calc === 'Potential-Energy-Calculator')
    {
        document.getElementById('result').style.display  = '';
        document.getElementById('result').innerText = n1 * n2 * 9.8 + ' J';
    }
	
}

function display_image(src, width, height, alt) {
    var a = document.createElement("img");
    a.src = src;
    a.width = width;
    a.height = height;
    a.alt = alt;
    document.body.appendChild(a);
}

