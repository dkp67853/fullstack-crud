<body>
<h1>SuperHero</h1>
<f:table collection="${superheroList}"/>
<table>
<thead>
            <tr>
                <td>Name</td>
                <td>Power</td>
            </tr>
            </thead>
<g:each in="${superheroList}" var="info">
                    <tr>
                        <td><a href="show/${info?.id}">${info?.name}</a> dilip</td>
                        <td>${info?.power}</td>

                        %{--Table Actions --}%

                    </tr>
</g:each></table>
</body>