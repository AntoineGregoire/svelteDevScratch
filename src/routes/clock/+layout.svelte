<div class="clock">
    <aside>
        
        <nav>
            <ul>
                <li>
                    <h4>Employés Actifs</h4>
                </li>
                <li>
                    <a href="/clock/two">Martin Gregoire</a> 
                </li>
                <li>
                    <a href="/clock/two">Eric Sinapoli</a>
                </li>
                <li>
                    <a href="/clock/three">Tatiana Azimova</a>
                </li>
                <li>
                    <h4>Autres Employés</h4>
                </li>
                <li>
                    <a href="/clock/one">Pierre Méthot</a>
                </li>
                <li>
                    <a href="/clock/two">Pedro Cuhna</a>
                </li>
                <li>
                    <a href="/clock/three">Tatiana Azimova</a>
                </li>
            </ul>
        </nav>
        
    </aside>

    <main>
        <slot/>
    </main>
    
</div>

<style>
    .clock {
        display: grid;
        gap: 1rem;
        grid-template-columns: 200px 60ch;
        margin-top: 1rem;

    }

    h4{
        color: var(--color-theme-1);
        margin-bottom: 0em;
    }

</style>