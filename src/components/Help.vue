<template>
    <section class="help">
        <div class="help-container">
            <div class="help-style">
                <h2 class="title">How to style a note?</h2>
                <ul class="suggestions">
                    <li>
                        <p>To edit an
                            <span class="tag">&lt;h1&gt; </span> use the selector
                            <span class="selector"> .note h1 </span>
                        </p>
                    </li>
                    <li>
                        <p>To edit an
                            <span class="tag">&lt;H2&gt;</span> use the selector
                            <span class="selector"> .note h2 </span>
                        </p>
                    </li>

                    <li>
                        <p>To edit an
                            <span class="tag">&lt;H3&gt;</span> use the selector
                            <span class="selector"> .note h3 </span>
                        </p>
                    </li>
                    <li>
                        <p>To edit an
                            <span class="tag">&lt;P&gt;</span> use the selector
                            <span class="selector"> .note p </span>
                        </p>
                    </li>
                    <li>
                        <p>To edit an
                            <span class="tag">&lt;UL&gt; </span> use the selector
                            <span class="selector"> .note ul</span>
                        </p>
                    </li>
                    <li>
                        <p>To edit an
                            <span class="tag">&lt;LINK&gt; </span> use the selector
                            <span class="selector"> .note a </span>
                        </p>
                    </li>
                    <li>
                        <p>To edit an
                            <span class="tag">&lt;IMG&gt;</span> use the selector
                            <span class="selector"> .note img </span>
                        </p>
                    </li>
                </ul>
            </div>
            <div class="help-style">
                <h2 class="title">How to style a card?</h2>
                <ul class="suggestions">
                    <li>
                        <p>To edit an
                            <span class="tag">&lt;h1&gt; </span> use the selector
                            <span class="selector"> .card h1 </span>
                        </p>
                    </li>
                    <li>
                        <p>To edit an
                            <span class="tag">&lt;H2&gt; </span> use the selector
                            <span class="selector"> .card h2 </span>
                        </p>
                    </li>
                    <li>
                        <p>To edit an
                            <span class="tag">&lt;H3&gt; </span> use the selector
                            <span class="selector"> .card h3 </span>
                        </p>
                    </li>
                    <li>
                        <p>To edit an
                            <span class="tag">&lt;P&gt; </span> use the selector
                            <span class="selector"> .card p </span>
                        </p>
                    </li>
                    <li>
                        <p>To edit an
                            <span class="tag">&lt;UL&gt; </span> use the selector
                            <span class="selector"> .card ul </span>
                        </p>
                    </li>
                    <li>
                        <p>To edit an
                            <span class="tag">&lt;LINK&gt; </span> use the selector
                            <span class="selector"> .card a </span>
                        </p>
                    </li>
                    <li>
                        <p>To edit an
                            <span class="tag">&lt;IMG&gt; </span> use the selector
                            <span class="selector"> .card img </span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </section>

</template>
<script>
export default {
    name: 'Help'
}
</script>
<style scoped>
.help {
    padding: 100px 0;
    font-family: Roboto, sans-serif;
}

.help-container {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 15px;
    display: flex;
}

.help-style {
    min-width: 50%;
}

.help .title {
    font-weight: 500;
    line-height: 1.3;
    letter-spacing: 1px;
}

.help .suggestions {
    list-style-type: circle;
    line-height: 1.5;
    letter-spacing: 1px;
}

.help .tag {
    background-color: #dfe4f5;
    border-radius: 3px;
    padding: 2px;
    white-space: nowrap;
}

.help .selector {
    background-color: #aed6f2;
    border-radius: 3px;
    color: #3792ed;
    padding: 4px;
    white-space: nowrap;
}

@media screen and (max-width:1000px) {
    .help {
        padding: 50px 0;
    }
    .help-container {
        flex-direction: column;
        align-items: center;
    }
    .help-style:first-child {
        margin-bottom: 40px;
    }
    .help .suggestions {
        padding-left: 20px;
    }
    .help .title {
        font-size: 30px;
    }
}
</style>